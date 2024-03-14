import Link from "next/link";
import cn from "classnames";
import type { ReactNode } from "react";
import { IconHome, IconInfo, IconMegaphone, IconPhotoStack, IconTelegram, IconVk } from "ui";
import styles from "./Header.module.scss";
import { NavigationDesktop, NavigationMobile } from "./Navigation";
import { ThemeSwitcher } from "./ThemeSwitcher";

export interface Tab {
	title?: string;
	icon?: ReactNode;
	href: string;
	hasTitle?: "both" | "mobile" | "desktop";
	hasIcon?: "both" | "mobile" | "desktop";
	group?: string;
}

const tabs: Tab[] = [
	{
		title: "Главная",
		icon: <IconHome size={23} />,
		href: "/",
		hasIcon: "mobile",
	},
	{
		title: "Новости",
		icon: <IconMegaphone size={23} />,
		href: "/news",
		hasIcon: "mobile",
	},
	{
		title: "Проекты",
		icon: <IconPhotoStack size={23} />,
		href: "/projects",
		hasIcon: "mobile",
	},
	{
		title: "Документы",
		icon: <IconInfo size={23} />,
		href: "/docs",
		hasIcon: "mobile",
	},
	{
		title: "Telegram канал",
		icon: <IconTelegram size={20} />,
		href: "https://t.me/school18_bratsk",
		group: "icon",
		hasTitle: "mobile",
	},
	{
		title: "Группа VK",
		icon: <IconVk size={20} />,
		href: "https://vk.com/school18bratsk",
		group: "icon",
		hasTitle: "mobile",
	},
];

export function Header(): JSX.Element {
	return (
		<header className={styles.header}>
			<div className={cn("wrapper", styles.header__content)}>
				<NavigationMobile tabs={tabs} />

				<Link href="/" style={{ display: "flex" }}>
					<svg fill="none" height={38} viewBox="0 0 562 562" width={38} xmlns="http://www.w3.org/2000/svg">
						<path
							d="M33 163C33 103.353 81.3533 55 141 55C200.647 55 249 103.353 249 163V398C249 457.647 200.647 506 141 506C81.3533 506 33 457.647 33 398V163Z"
							fill="var(--color-primary)"
						/>
						<path
							d="M561.998 364.873C561.998 442.639 498.988 505.68 421.261 505.68C343.534 505.68 280.523 442.639 280.523 364.873C280.523 287.108 343.534 224.066 421.261 224.066C498.988 224.066 561.998 287.108 561.998 364.873Z"
							fill="var(--color-primary)"
						/>
						<path
							d="M516.246 150.033C516.246 202.518 473.719 245.066 421.26 245.066C368.8 245.066 326.273 202.518 326.273 150.033C326.273 97.5477 368.8 55 421.26 55C473.719 55 516.246 97.5477 516.246 150.033Z"
							fill="var(--color-primary)"
						/>
					</svg>
				</Link>

				<NavigationDesktop tabs={tabs} />

				<ThemeSwitcher />
			</div>
		</header>
	);
}
