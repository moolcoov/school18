import moment from "moment";
import Image from "next/image";
import styles from "./PostMeta.module.scss";

export function PostMeta({ group, postDate }: { group?: VkWallGetPostGroup; postDate: number }): JSX.Element {
	const date = moment(postDate * 1000);

	return (
		<div className={styles.meta}>
			{group ? (
				<>
					<div className={styles.meta__image}>
						<Image alt={group.name} fill src={group.photo_50} />
					</div>
					<span>•</span>
				</>
			) : null}
			<span>{date.format("LT")}</span>
			<span>•</span>
			<span>{date.format("D MMMM YYYY")}</span>
		</div>
	);
}
