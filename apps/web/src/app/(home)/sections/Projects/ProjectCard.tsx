import type { ImageUrlBuilder } from "sanity";
import { Heading, IconChevronRightCircle } from "ui";
import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import cn from "classnames";
import styles from "./Projects.module.scss";
import { urlFor } from "@/lib/sanity/sanity.image";

export function ProjectCard({ slug, card }: SanityProject): JSX.Element {
	const { title, description, image, rows, cols, infoBlock } = card;

	const cardImage: ImageUrlBuilder | undefined = image ? urlFor(image) : undefined;
	const cardType = getCardType(card);

	return (
		<div
			className={cn(styles.card, styles[`card_${cardType}`])}
			data-card-type={cardType}
			data-info-pos={infoBlock}
			style={
				{
					"--card-rows": rows,
					"--card-cols": cols,
				} as CSSProperties
			}
		>
			<Link className={styles.card__link} href={`/projects/${slug.current}` as Route} />
			<div className={styles.card__info}>
				<Heading className={styles.card__title} level={2}>
					{title}
				</Heading>
				{description ? <p className={styles.card__description}>{description}</p> : null}
			</div>
			{cardImage ? (
				<div className={styles.card__image}>
					<Image alt={title} fill quality={100} src={cardImage.url()} />
				</div>
			) : null}
			<div className={styles.card__arrow}>
				<IconChevronRightCircle size={28} />
			</div>
		</div>
	);
}

function getCardType({ rows, cols, infoBlock }: SanityProject["card"]): "column" | "row" {
	if (rows > cols) {
		return "column";
	} else if (cols > rows) {
		return "row";
	}

	if (infoBlock === "up") {
		return "row";
	}

	return "column";
}
