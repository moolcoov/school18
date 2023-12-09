import Skeleton from "react-loading-skeleton";
import styles from "./NewsSwitcher.module.scss";

export function NewsSwitcherFallback(): JSX.Element {
	return (
		<div className={styles.switcher}>
			<div className={styles.switcher_one} style={{ lineHeight: 1 }}>
				<Skeleton circle height={28} width={28} />
				<Skeleton borderRadius={999} height={28} width={45} />
				<Skeleton circle height={28} width={28} />
			</div>
			<div className={styles.switcher_many} style={{ lineHeight: 1 }}>
				<Skeleton circle height={28} width={28} />
				<Skeleton circle height={28} width={28} />
			</div>
		</div>
	);
}
