"use client";
import Link from "next/link";
import type { Route } from "next";
import cn from "classnames";
import { usePathname } from "next/navigation";
import type { Tab } from "../Header";
import styles from "./Navigation.module.scss";

export function NavigationTab({
	tab,
	variant,
	onClick,
}: {
	tab: Tab;
	variant: "desktop" | "mobile";
	onClick?: () => void;
}): JSX.Element {
	const pathname = usePathname();

	const hasTitle = getHas({ el: tab.title, hasEl: tab.hasTitle, variant });
	const hasIcon = getHas({ el: tab.icon, hasEl: tab.hasIcon, variant });

	return (
		<Link
			className={cn(styles.tab, styles[`tab_${variant}`], {
				[styles[`tab_${variant}_icon`]]: variant === "desktop" && !hasTitle && hasIcon,
				[styles.tab_active]: pathname === tab.href || (tab.href !== "/" && pathname.includes(tab.href)),
			})}
			href={tab.href as Route}
			onClick={onClick}
			target={tab.group === "icon" ? "_blank" : undefined}
		>
			{hasIcon ? tab.icon : null}
			{hasTitle ? <span>{tab.title}</span> : null}
		</Link>
	);
}

function getHas({
	el,
	hasEl,
	variant,
}: {
	el?: unknown;
	hasEl?: "both" | "mobile" | "desktop";
	variant: "mobile" | "desktop";
}): boolean {
	if (!el) {
		return false;
	}
	return hasEl ? hasEl === "both" || hasEl === variant : true;
}
