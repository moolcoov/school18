import type { Route } from "next";
import Link from "next/link";
import { IconChevronRight } from "ui";
import cn from "classnames";
import styles from "./DocsPath.module.scss";
import type { SanityDoc } from "@/lib/sanity";

export function DocsPath({ path }: { path: (SanityDoc | undefined)[] }): JSX.Element {
	let url = "/docs/";

	return (
		<div className={styles.path}>
			{[...path].map((doc, i) => {
				url += `${doc?.seo.slug.current}/`;

				return (
					<>
						{i === 0 ? null : <IconChevronRight size={14} />}
						{i + 1 === path.length ? (
							<span className={cn(styles.path__tab, styles.path__tab_active)}>{doc?.seo.title}</span>
						) : (
							<Link className={styles.path__tab} href={url as Route}>
								{doc?.seo.title}
							</Link>
						)}
					</>
				);
			})}
		</div>
	);
}
