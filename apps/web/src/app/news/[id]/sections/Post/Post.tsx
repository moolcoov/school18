import cn from "classnames";
import sectionStyles from "../Post.module.scss";
import { PostMeta } from "./PostMeta";
import { PostText } from "./PostText";
import styles from "./PostContent.module.scss";
import { PostAttachments } from "./PostAttachments";

export function Post({ post, groups }: { post: VkWallGetPost; groups?: VkWallGetPostGroups }): JSX.Element {
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
