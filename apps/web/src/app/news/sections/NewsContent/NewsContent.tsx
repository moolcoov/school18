import { PostCard } from "./PostCard";
import styles from "./NewsContent.module.scss";
import { NewsContentFallback } from "./NewsContent.fallback";

export function NewsContent({ posts }: { posts: VkWallGetPost[] | undefined }): JSX.Element {
	if (!posts) {
		return <NewsContentFallback />;
	}

	return (
		<div className={styles.posts}>
			{[...posts].map((post) => (
				<PostCard key={`${post.owner_id}_${post.id}`} post={post} />
			))}
		</div>
	);
}
