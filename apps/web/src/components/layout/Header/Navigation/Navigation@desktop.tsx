import type { Tab } from "../Header";
import { NavigationTab } from "./Tab";
import styles from "./Navigation.module.scss";

export function NavigationDesktop({ tabs }: { tabs: Tab[] }): JSX.Element {
	return (
		<nav className={styles.navigation}>
			{[...tabs].map((tab) => (
				<NavigationTab key={tab.href} tab={tab} variant="desktop" />
			))}
		</nav>
	);
}
