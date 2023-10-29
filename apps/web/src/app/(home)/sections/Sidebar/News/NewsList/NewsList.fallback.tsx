import Skeleton from "react-loading-skeleton";
import cn from "classnames";
import styles from "../News.module.scss";

export function NewsListFallback(): JSX.Element {
	return (
		<div className={cn(styles.news__items, styles.news__items_fallback)}>
			{[...Array(3)].map((i) => (
				<div className={styles.news__item} key={i} style={{ height: 60 }}>
					<div style={{ lineHeight: 1 }}>
						<Skeleton borderRadius={8} height={40} width={40} />
					</div>
					<div className={styles.news__item__info}>
						<Skeleton height={21} width="100%" />
						<div className={styles.news__item__tags}>
							<Skeleton height={14} width={27} />
							<Skeleton height={14} width={4} />
							<Skeleton height={14} width={68} />
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
