import { PortableText } from "@portabletext/react";
import type { TypedObject } from "sanity";
import styles from "./About.module.scss";

export function ProjectContentAbout({ content }: { content?: TypedObject[] }): JSX.Element {
	if (!content) {
		return <>{null}</>;
	}

	return (
		<section className={styles.about}>
			<h2 className={styles.about__heading}>О проекте</h2>
			<div className={styles.about__prose}>
				<PortableText value={content} />
			</div>
		</section>
	);
}
