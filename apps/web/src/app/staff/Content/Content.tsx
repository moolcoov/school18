import styles from "./Content.module.scss";
import { StaffCard } from "./Card";
import type { SanityEmployee } from "@/lib/sanity";

export function StaffContent({ employers }: { employers: SanityEmployee[] }): JSX.Element {
	return (
		<main className={styles.content}>
			{[...employers].map((employee) => (
				<StaffCard employee={employee} key={employee._id} />
			))}
		</main>
	);
}
