import { notFound } from "next/navigation";
import cn from "classnames";
import { Post } from "./sections/Post";
import { PostInfo } from "./sections/PostInfo";
import styles from "./PostPage.module.scss";
import { BackButton } from "./sections/BackButton";
import { VkWallGetById } from "@/lib/vk";

export default async function NewsPostPage({ params }: { params: { id: string } }): Promise<JSX.Element> {
	const postResponse: VkWallGetResponse = await VkWallGetById({ id: params.id });
	const groups = postResponse.response.groups;
	const post: VkWallGetPost | undefined = postResponse.response.items.at(0);

	if (!post) {
		notFound();
	}

	return (
		<>
			<div className={cn("wrapper", styles["back-button"])}>
				<BackButton />
			</div>
			<div className={cn("wrapper", styles.post)}>
				<Post groups={groups} post={post} />
				<PostInfo groups={groups} post={post} />
			</div>
		</>
	);
}
