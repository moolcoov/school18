import cn from "classnames";
import { Hero } from "./sections/Hero";
import { Sidebar } from "./sections/Sidebar";
import styles from "./Home.module.scss";
import { Projects } from "./sections/Projects/Projects";

export default function Home(): JSX.Element {
	return (
		<div className="stack">
			<div className={cn("wrapper", styles.hero)}>
				<Hero />
				<Sidebar />
			</div>
			<Projects />
		</div>
	);
}
