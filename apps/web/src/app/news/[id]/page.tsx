import cn from "classnames";
import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Post, PostFallback } from "./sections/Post";
import { PostInfo } from "./sections/PostInfo";
import styles from "./PostPage.module.scss";
import { BackButton } from "./sections/BackButton";
import { PostInfoFallback } from "./sections/PostInfo/PostInfo.fallback";
import { VkWallGetById } from "@/lib/vk";

interface PageProps {
	params: { id: string };
	searchParams: Record<string, string | string[] | undefined>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const postResponse: VkWallGetResponse = await VkWallGetById({ id: params.id });
	// @ts-expect-error vkwall
	const post: VkWallGetPost | undefined = postResponse.response.items.at(0);

	if (!post) {
		notFound();
	}

	const image = getImage(post.attachments, post.copy_history);
	const title = getText(post.text, Boolean(image), post.copy_history);

	return {
		title: title.length >= 40 ? `${title.slice(0, 40)}...` : title,
		robots: "noindex, nofollow",
	};
}

export default function NewsPostPage({ params }: PageProps): JSX.Element {
	return (
		<>
			<div className={cn("wrapper", styles["back-button"])}>
				<BackButton />
			</div>
			<div className={cn("wrapper", styles.post)}>
				<Suspense fallback={<PostFallback />}>
					<Post postId={params.id} />
				</Suspense>
				<Suspense fallback={<PostInfoFallback />}>
					<PostInfo postId={params.id} />
				</Suspense>
			</div>
		</>
	);
}

function getText(postText: string, hasImage: boolean, copyHistory?: VkWallGetPost[]): string {
	if (postText) {
		return postText;
	}

	const copyHistoryText = copyHistory?.at(0)?.text;
	if (copyHistoryText !== "" && copyHistoryText) {
		return copyHistoryText;
	}

	if (hasImage) {
		return "🖼️ Картинка";
	}

	return "";
}

function getImage(
	attachments?: VkWallGetPostAttachments,
	copyHistory?: VkWallGetPost[],
): VkWallGetPostAttachmentPhoto | undefined {
	if (attachments) {
		for (const attachment of attachments) {
			if (attachment.type === "photo") {
				return attachment;
			}
		}
	}

	if (copyHistory) {
		for (const post of copyHistory) {
			const image = getImage(post.attachments, undefined);
			if (image) {
				return image;
			}
		}
	}

	return undefined;
}
