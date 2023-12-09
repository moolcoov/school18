import cn from "classnames";
import { notFound } from "next/navigation";
import sectionStyles from "../Post.module.scss";
import { PostMeta } from "./PostMeta";
import { PostText } from "./PostText";
import styles from "./PostContent.module.scss";
import { PostAttachments } from "./PostAttachments";
import { VkWallGetById } from "@/lib/vk";

export async function Post({ postId }: { postId: string }): Promise<JSX.Element> {
	const postResponse: VkWallGetResponse = await VkWallGetById({ id: postId });
	const groups = postResponse.response?.groups;
	// @ts-expect-error vkwall
	const post: VkWallGetPost | undefined = postResponse.response.items.at(0);

	if (!post) {
		notFound();
	}

	const postGroup = groups?.at(-1);
	const sourceGroup = groups?.at(0);

	const sourcePost = post.copy_history?.at(0);

	return (
		<main className={cn(sectionStyles.section, sectionStyles.section_content)}>
			<div className={sectionStyles["section__main-content"]}>
				<PostMeta group={postGroup} postDate={post.date} />
				<PostText postText={post.text} />

				{sourcePost ? (
					<div className={styles.repost}>
						<span className={styles.repost__line} />
						<div className={sectionStyles["section__main-content"]}>
							<PostMeta group={sourceGroup} postDate={sourcePost.date} />
							<PostText postText={sourcePost.text} />
							<PostAttachments attachments={sourcePost.attachments} />
						</div>
					</div>
				) : null}
			</div>
			<PostAttachments attachments={post.attachments} />
		</main>
	);
}
