import cn from "classnames";
import sectionStyles from "../Post.module.scss";
import { PostInfoGroup } from "./PostInfoGroup";
import styles from "./PostInfo.module.scss";

export function PostInfo({ groups }: { post: VkWallGetPost; groups?: VkWallGetPostGroups }): JSX.Element {
	const sourceGroup = groups?.at(0);
	const postGroup = groups?.at(-1);

	return (
		<div className={cn(sectionStyles.section, sectionStyles.section_info)}>
			<div className={styles.groups}>
				{postGroup ? <PostInfoGroup imageSrc={postGroup.photo_100} name={postGroup.name} /> : null}
				{postGroup !== sourceGroup && sourceGroup ? (
					<div className={styles.repost}>
						<span className={styles.repost__line} />
						<div className={styles.repost__info}>
							<p className={styles.repost__info__label}>репост из</p>
							<PostInfoGroup imageSrc={sourceGroup.photo_100} name={sourceGroup.name} />
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
}
