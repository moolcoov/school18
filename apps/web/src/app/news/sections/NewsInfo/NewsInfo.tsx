import { NewsInfoFallback } from "./NewsInfo.fallback";
import styles from "./NewsInfo.module.scss";

export function NewsInfo({ page, newsCount }: { page: number; newsCount: number | undefined }): JSX.Element {
	if (!newsCount) {
		return <NewsInfoFallback />;
	}

	const currentPage = page + 1;
	const maxPages =
		newsCount / 10 > Math.round(newsCount / 10) ? Math.round(newsCount / 10) + 1 : Math.round(newsCount / 10);

	return (
		<div className={styles.info}>
			<p>Всего: {newsCount}</p>
			<p>
				Страница {currentPage} из {maxPages}
			</p>
		</div>
	);
}
