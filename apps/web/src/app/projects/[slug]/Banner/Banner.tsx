import Link from "next/link";
import cn from "classnames";
import Image from "next/image";
import styles from "./Banner.module.scss";
import { urlFor, type SanityProject } from "@/lib/sanity";

export function ProjectBanner({ title, description, cluster }: SanityProject): JSX.Element {
	return (
		<div className={cn("wrapper", styles.banner)}>
			<div className={cn(styles.banner__project, { [styles["banner__project_with-cluster"]]: cluster })}>
				<Link href="/projects">
					<h3>Проекты</h3>
				</Link>
				<div className={styles.banner__project__heading}>
					<h1 className={styles.banner__project__title}>{title}</h1>
					<p className={styles.banner__project__description}>{description}</p>
				</div>
			</div>
			{cluster ? (
				<div className={styles.banner__cluster}>
					<div className={styles.banner__cluster__content}>
						<h3 className={styles.banner__cluster__title}>{cluster.title}</h3>
						<Image alt={cluster.title} height={43} src={urlFor(cluster.logo).url()} width={43} />
					</div>
				</div>
			) : null}
		</div>
	);
}
