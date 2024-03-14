import styles from "./Meta.module.scss";
import type { SanityEmployee } from "@/lib/sanity";

export function ProjectMeta({ manager }: { manager?: SanityEmployee }): JSX.Element {
	return (
		<aside className={styles.meta}>
			{manager ? (
				<div className={styles.meta__manager}>
					{/* TODO project manager image */}
					<div className={styles.meta__manager__info}>
						<p className={styles.meta__manager__job}>Руководитель проекта</p>
						<h3 className={styles.meta__manager__name}>
							{manager.lastName} {manager.firstName}
						</h3>
					</div>
				</div>
			) : null}
		</aside>
	);
}
