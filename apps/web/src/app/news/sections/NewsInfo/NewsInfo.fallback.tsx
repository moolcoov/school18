import Skeleton from "react-loading-skeleton";
import styles from "./NewsInfo.module.scss";

export function NewsInfoFallback(): JSX.Element {
	return (
		<div className={styles.info}>
			<div style={{ lineHeight: 1 }}>
				<Skeleton height={23} width={85} />
			</div>
			<div style={{ lineHeight: 1 }}>
				<Skeleton height={23} width={140} />
			</div>
		</div>
	);
}
