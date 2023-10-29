import { Heading } from "ui";
import cn from "classnames";
import { Suspense } from "react";
import sectionStyles from "../Sidebar.module.scss";
import styles from "./News.module.scss";
import { NewsList, NewsListFallback } from "./NewsList";

export function News(): JSX.Element {
	return (
		<div className={cn(sectionStyles.section, styles.news)}>
			<Heading level={2}>Новости</Heading>
			<Suspense fallback={<NewsListFallback />}>
				<NewsList />
			</Suspense>
			<div className="">Все новости</div>
		</div>
	);
}
