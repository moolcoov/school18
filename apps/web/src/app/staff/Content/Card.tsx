import Link from "next/link";
import Image from "next/image";
import styles from "./Content.module.scss";
import { urlFor, type SanityEmployee } from "@/lib/sanity";

export function StaffCard({ employee }: { employee?: SanityEmployee }): JSX.Element {
	if (!employee) {
		return <>{null}</>;
	}

	return (
		<div className={styles.card}>
			{employee.image ? (
				<div className={styles.card__image}>
					<Image
						alt={`Фотография ${[employee.lastName, employee.firstName, employee.fatherName].join(" ")}`}
						fill
						src={urlFor(employee.image).url()}
					/>
				</div>
			) : null}

			<div className={styles.card__info}>
				{employee.position?.post ? <h3 className={styles.card__info__post}>{employee.position.post}</h3> : null}
				<h2 className={styles.card__info__title}>
					{[employee.lastName, employee.firstName, employee.fatherName].join(" ")}
				</h2>
			</div>
			{employee.contacts?.email || employee.contacts?.phone ? (
				<div className={styles.card__contacts}>
					{employee.contacts.phone ? (
						// TODO phone presenter
						<Link href={`tel:${employee.contacts.phone}`}>{employee.contacts.phone}</Link>
					) : null}
					{employee.contacts.email ? (
						<Link href={`mailto:${employee.contacts.email}`}>{employee.contacts.email}</Link>
					) : null}
				</div>
			) : null}
		</div>
	);
}
