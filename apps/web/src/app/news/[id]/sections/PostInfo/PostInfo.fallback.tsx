import Skeleton from "react-loading-skeleton";
import cn from "classnames";
import sectionStyles from "../Post.module.scss";
import styles from "./PostInfo.module.scss";

export function PostInfoFallback(): JSX.Element {
	return (
		<div className={cn(sectionStyles.section, sectionStyles.section_info)}>
			<div className={styles.groups}>
				<div className={styles.group} style={{ lineHeight: 1 }}>
					<Skeleton circle height={52} width={52} />
					<div style={{ width: "100%" }}>
						<Skeleton height={26} width="100%" />
					</div>
				</div>
			</div>
		</div>
	);
}
