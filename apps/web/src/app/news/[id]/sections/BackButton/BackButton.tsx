"use client";

import { useRouter } from "next/navigation";
import { IconArrowLeft } from "ui";
import styles from "./BackButton.module.scss";

export function BackButton(): JSX.Element {
	const router = useRouter();

	function onClick(): void {
		router.back();
	}

	return (
		<button className={styles.button} onClick={onClick} type="button">
			<IconArrowLeft size={14} />
			<span>назад</span>
		</button>
	);
}
