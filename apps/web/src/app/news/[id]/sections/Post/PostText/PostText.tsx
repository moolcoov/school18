import { PostTextLine } from "./PostTextLine";
import styles from "./PostText.module.scss";

export function PostText({ postText, copyHistory }: { postText?: string; copyHistory?: VkWallGetPost[] }): JSX.Element {
	if (!postText && !copyHistory) {
		// @ts-expect-error return
		return;
	}

	const lines = postText?.split("\n");

	return <div className={styles.text}>{lines?.map((line) => <PostTextLine key={line} line={line} />)}</div>;
}
