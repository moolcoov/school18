import styles from "./Post.module.scss";
import { PostMeta } from "./PostMeta";
import { PostText } from "./PostText";

export function Post({ post, group }: { post: VkWallGetPost; group?: VkWallGetPostGroup }): JSX.Element {
	return (
		<main className={styles.post}>
			<div className={styles["post__main-content"]}>
				<PostMeta group={group} postDate={post.date} />
				<PostText postText={post.text} />
			</div>
		</main>
	);
}
