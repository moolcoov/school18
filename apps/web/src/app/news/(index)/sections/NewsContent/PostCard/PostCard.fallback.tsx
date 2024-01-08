import cn from "classnames";
import Skeleton from "react-loading-skeleton";
import styles from "./PostCard.module.scss";

export function PostCardFallback({ type, hasImage }: { type: "cover" | "small"; hasImage: boolean }): JSX.Element {
	return (
		<div className={cn(styles.card, styles[`card_${type}`])}>
			{hasImage ? (
				<div className={cn(styles.card__image, styles[`card__image_${type}`])} style={{ lineHeight: 1 }}>
					<Skeleton height="100%" width="100%" />
				</div>
			) : null}
			<div className={styles.card__info}>
				<div style={{ lineHeight: 2 }}>
					<Skeleton count={type === "cover" ? 2 : 3} height={26} width="100%" />
				</div>
				<div className={styles.card__info__tags} style={{ lineHeight: 1 }}>
					<Skeleton height={23} width={40} />
					<Skeleton height={23} width={5} />
					<Skeleton height={23} width={84} />
				</div>
			</div>
		</div>
	);
}
