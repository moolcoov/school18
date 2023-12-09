import styles from "./NewsContent.module.scss";
import { PostCardFallback } from "./PostCard";

export function NewsContentFallback(): JSX.Element {
	return (
		<div className={styles.posts}>
			<PostCardFallback hasImage type="cover" />
			<PostCardFallback hasImage={false} type="cover" />
			<PostCardFallback hasImage type="small" />
			<PostCardFallback hasImage type="small" />
			<PostCardFallback hasImage type="small" />

			<PostCardFallback hasImage type="small" />
			<PostCardFallback hasImage type="cover" />
			<PostCardFallback hasImage type="small" />
			<PostCardFallback hasImage={false} type="cover" />
			<PostCardFallback hasImage type="cover" />
		</div>
	);
}
