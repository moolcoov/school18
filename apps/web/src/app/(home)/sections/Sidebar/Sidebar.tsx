import { Info } from "./Info";
import { News } from "./News";
import styles from "./Sidebar.module.scss";

export function Sidebar(): JSX.Element {
	return (
		<div className={styles.sidebar}>
			<Info />
			<News />
		</div>
	);
}
