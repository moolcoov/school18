import type { ImageUrlBuilder } from "sanity";
import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./Projects.module.scss";
import { urlFor } from "@/lib/sanity/sanity.image";
import { Heading } from "ui";

interface ProjectCardProps {
	title: string;
	description?: string;
	icon?: SanityDefImage;
	colors?: SanityProject["colors"];
}

export function ProjectCard({ title, description, icon, colors }: ProjectCardProps): JSX.Element {
	const iconImage: ImageUrlBuilder | undefined = icon ? urlFor(icon) : undefined;

	return (
		<div
			className={styles.card}
			style={
				{
					"--color-pcard-accent":
						colors?.accent &&
						`rgba(${colors.accent.rgb.r}, ${colors.accent.rgb.g}, ${colors.accent.rgb.b}, ${colors.accent.rgb.a})`,
					"--color-pcard-background":
						colors?.background &&
						`rgba(${colors.background.rgb.r}, ${colors.background.rgb.g}, ${colors.background.rgb.b}, ${colors.background.rgb.a})`,
					"--color-pcard-description":
						colors?.description &&
						`rgba(${colors.description.rgb.r}, ${colors.description.rgb.g}, ${colors.description.rgb.b}, ${colors.description.rgb.a})`,
					"--color-pcard-icon":
						colors?.icon &&
						`rgba(${colors.icon.rgb.r}, ${colors.icon.rgb.g}, ${colors.icon.rgb.b}, ${colors.icon.rgb.a})`,
				} as CSSProperties
			}
		>
			{iconImage ? (
				<div className={styles.card__icon}>
					<span>
						<Image alt={title} height={30} src={iconImage.url()} width={30} />
					</span>
				</div>
			) : null}
			<div className={styles.card__info}>
				<Heading level={1} className={styles.card__title}>{title}</Heading>
				{description ? <p className={styles.card__description}>{description}</p> : null}
			</div>
		</div>
	);
}
