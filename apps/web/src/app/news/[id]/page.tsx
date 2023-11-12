import cn from "classnames";
import { Suspense } from "react";
import { Post, PostFallback } from "./sections/Post";
import { PostInfo } from "./sections/PostInfo";
import styles from "./PostPage.module.scss";
import { BackButton } from "./sections/BackButton";
import { PostInfoFallback } from "./sections/PostInfo/PostInfo.fallback";

export default function NewsPostPage({ params }: { params: { id: string } }): JSX.Element {
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
