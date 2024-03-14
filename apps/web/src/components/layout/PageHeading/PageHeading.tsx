import type { ReactNode } from "react";
import styles from "./PageHeading.module.scss";

interface PageHeadingProps {
	title: ReactNode;
	description?: ReactNode;
	icon?: ReactNode;
}

export function PageHeading({ title, description, icon }: PageHeadingProps): JSX.Element {
	return (
		<div className={styles.heading}>
			{icon ? <div className={styles.heading__icon}>{icon}</div> : null}
			<div className={styles.heading__info}>
				<h1 className={styles.heading__info__title}>{title}</h1>
				{description ? <p className={styles.heading__info__description}>{description}</p> : null}
			</div>
		</div>
	);
}
