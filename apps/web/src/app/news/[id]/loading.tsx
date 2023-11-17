import cn from "classnames";
import styles from "./PostPage.module.scss";
import { BackButton } from "./sections/BackButton";
import { PostFallback } from "./sections/Post";
import { PostInfoFallback } from "./sections/PostInfo/PostInfo.fallback";

export default function NewsPostPageLoading(): JSX.Element {
	return (
		<>
			<div className={cn("wrapper", styles["back-button"])}>
				<BackButton />
			</div>
			<div className={cn("wrapper", styles.post)}>
				<PostFallback />
				<PostInfoFallback />
			</div>
		</>
	);
}
