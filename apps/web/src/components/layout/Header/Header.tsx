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
		title: "О школе",
		icon: <IconInfo size={23} />,
		href: "/about",
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
					<svg fill="none" height="40" viewBox="0 0 48 48" width="40" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_1202_279)">
							<path
								d="M32.8421 0H15.1579C6.78642 0 0 6.78642 0 15.1579V32.8421C0 41.2136 6.78642 48 15.1579 48H32.8421C41.2136 48 48 41.2136 48 32.8421V15.1579C48 6.78642 41.2136 0 32.8421 0Z"
								fill="var(--color-primary)"
							/>
							<path
								d="M15.9015 36.6601V11.3969H12.1289V12.6433H14.6552V36.6601H15.9015ZM37.8879 21.4685C38.5166 22.8833 38.831 24.3766 38.831 25.9485C38.831 28.0369 38.2584 29.9906 37.1131 31.8096C35.9679 33.606 34.4071 34.9534 32.431 35.8517C31.0163 36.4804 29.5454 36.7948 28.0184 36.7948C25.9075 36.7948 23.9426 36.2222 22.1236 35.0769C20.3271 33.9317 18.9798 32.371 18.0815 30.3948C17.4303 29.0025 17.1047 27.5092 17.1047 25.9148C17.1047 23.8039 17.6773 21.8502 18.8226 20.0538C19.9679 18.2573 21.5398 16.9099 23.5384 16.0117L23.5047 15.7085L23.5384 15.4054C23.6282 14.2152 24.0998 13.2271 24.9531 12.4411C25.8289 11.6327 26.8507 11.2285 28.0184 11.2285C28.8717 11.2285 29.6465 11.4531 30.3426 11.9022C31.0387 12.3289 31.5777 12.9127 31.9594 13.6538C32.3412 14.3948 32.4984 15.1808 32.431 16.0117C33.6436 16.5506 34.7215 17.2917 35.6647 18.2348C36.6079 19.178 37.3489 20.2559 37.8879 21.4685ZM27.951 12.5085C27.0977 12.5085 26.3566 12.8117 25.7279 13.418C25.1215 14.0018 24.8071 14.7092 24.7847 15.5401C25.7503 15.2257 26.817 15.0685 27.9847 15.0685C29.1524 15.0685 30.2191 15.2257 31.1847 15.5401C31.1623 14.6867 30.8254 13.9681 30.1742 13.3843C29.5454 12.8004 28.8044 12.5085 27.951 12.5085ZM28.0184 35.5148C29.7475 35.5148 31.3419 35.0881 32.8015 34.2348C34.2612 33.359 35.4177 32.1913 36.271 30.7317C37.1468 29.2496 37.5847 27.6439 37.5847 25.9148C37.5847 24.1857 37.1468 22.5913 36.271 21.1317C35.4177 19.672 34.2612 18.5155 32.8015 17.6622C31.3419 16.7864 29.7475 16.3485 28.0184 16.3485C26.2668 16.3485 24.65 16.7864 23.1679 17.6622C21.7082 18.5155 20.5405 19.672 19.6647 21.1317C18.8113 22.5913 18.3847 24.1857 18.3847 25.9148C18.3847 27.6439 18.8113 29.2496 19.6647 30.7317C20.5405 32.1913 21.7082 33.359 23.1679 34.2348C24.65 35.0881 26.2668 35.5148 28.0184 35.5148Z"
								fill="#0F0F0F"
							/>
						</g>
						<defs>
							<clipPath id="clip0_1202_279">
								<rect fill="white" height="48" width="48" />
							</clipPath>
						</defs>
					</svg>
				</Link>

				<NavigationDesktop tabs={tabs} />

				<ThemeSwitcher />
			</div>
		</header>
	);
}
