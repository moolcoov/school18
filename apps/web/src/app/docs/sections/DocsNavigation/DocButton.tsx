"use client";

import Link from "next/link";
import cn from "classnames";
import { usePathname } from "next/navigation";
import styles from "./DocsNavigation.module.scss";
import type { SanityDoc } from "@/lib/sanity";

export function DocButton({ doc, slug, type }: { doc: SanityDoc; slug: string; type: "section" | "doc" }): JSX.Element {
	const pathname = usePathname();

	return (
		<Link href={`/docs/${slug}`}>
			<div
				className={cn(styles.button, styles[`button_${type}`], {
					[styles.button_active]: pathname === `/docs/${slug}`,
				})}
			>
				<span>{doc.seo.title}</span>
			</div>
		</Link>
	);
}
