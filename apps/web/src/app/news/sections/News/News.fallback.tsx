import cn from "classnames";
import { NewsInfoFallback } from "../NewsInfo";
import { NewsSwitcherFallback } from "../NewsSwitcher";
import { NewsContentFallback } from "../NewsContent";
import styles from "./News.module.scss";

export function NewsFallback(): JSX.Element {
	return (
		<div className={cn("wrapper", styles.news)}>
			<div className={styles.news__content}>
				<NewsSwitcherFallback />
				<NewsContentFallback />
				<NewsSwitcherFallback />
			</div>
			<NewsInfoFallback />
		</div>
	);
}
