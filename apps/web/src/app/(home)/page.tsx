import cn from "classnames";
import { Hero } from "./sections/Hero";
import { Sidebar } from "./sections/Sidebar";
import styles from "./Home.module.scss";

export default function Home(): JSX.Element {
	return (
		<div className={cn("wrapper", styles.hero)}>
			<Hero />
			<Sidebar />
		</div>
	);
}
