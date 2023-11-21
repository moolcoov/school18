"use client";

import { IconMenu } from "ui";
import { useState } from "react";
import cn from "classnames";
import type { Tab } from "../Header";
import styles from "./Navigation.module.scss";
import { NavigationTab } from "./Tab";

export function NavigationMobile({ tabs }: { tabs: Tab[] }): JSX.Element {
	const [isOpened, setIsOpened] = useState(false);

	const icons = tabs.filter((tab) => tab.group === "icon");
	const others = tabs.filter((tab) => tab.group !== "icon");

	return (
		<div className={styles.navigation_mobile}>
			<button
				className={styles.navigation_mobile__button}
				onClick={() => {
					setIsOpened(true);
				}}
				type="button"
			>
				<IconMenu size={21} />
			</button>
			<div className={cn(styles.navigation_mobile__menu, { [styles.navigation_mobile__menu_opened]: isOpened })}>
				<div
					aria-hidden="true"
					className={styles.navigation_mobile__menu__back}
					onClick={() => {
						setIsOpened(false);
					}}
				/>
				<div className={cn("wrapper", styles.navigation_mobile__menu__content)}>
					<div className={styles.navigation_mobile__menu__tabs}>
						{[...others].map((tab) => (
							<NavigationTab
								key={tab.title}
								onClick={() => {
									setIsOpened(false);
								}}
								tab={tab}
								variant="mobile"
							/>
						))}
					</div>
					<span className="divider" />
					<div className={styles.navigation_mobile__menu__tabs}>
						{[...icons].map((tab) => (
							<NavigationTab
								key={tab.title}
								tab={tab}
								variant="mobile"
								onClick={() => {
									setIsOpened(false);
								}}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
