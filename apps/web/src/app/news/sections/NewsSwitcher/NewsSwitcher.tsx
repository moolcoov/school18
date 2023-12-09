import {
	IconChevronLeftCircle,
	IconChevronRightCircle,
	IconChevronDoubleLeftCircle,
	IconChevronDoubleRightCircle,
} from "ui";
import Link from "next/link";
import cn from "classnames";
import styles from "./NewsSwitcher.module.scss";
import { NewsSwitcherFallback } from "./NewsSwitcher.fallback";

export function NewsSwitcher({ page, newsCount }: { page: number; newsCount: number | undefined }): JSX.Element {
	if (!newsCount) {
		return <NewsSwitcherFallback />;
	}

	const currentPage = page + 1;
	const maxPages =
		newsCount / 10 > Math.round(newsCount / 10) ? Math.round(newsCount / 10) + 1 : Math.round(newsCount / 10);

	return (
		<div className={styles.switcher}>
			<div className={styles.switcher_one}>
				{page <= 0 ? (
					<div className={cn(styles.button, styles.button_disable)}>
						<IconChevronLeftCircle size={20} />
					</div>
				) : (
					<Link href={`/news?p=${page - 1}`}>
						<div className={styles.button}>
							<IconChevronLeftCircle size={20} />
						</div>
					</Link>
				)}

				<span>
					{currentPage} / {maxPages}
				</span>

				{page + 1 >= maxPages ? (
					<div className={cn(styles.button, styles.button_disable)}>
						<IconChevronRightCircle size={20} />
					</div>
				) : (
					<Link href={`/news?p=${page + 1}`}>
						<div className={styles.button}>
							<IconChevronRightCircle size={20} />
						</div>
					</Link>
				)}
			</div>
			<div className={styles.switcher_many}>
				{page <= 0 ? (
					<div className={cn(styles.button, styles.button_disable)}>
						<IconChevronDoubleLeftCircle size={20} />
					</div>
				) : (
					<Link href="/news?p=0">
						<div className={styles.button}>
							<IconChevronDoubleLeftCircle size={20} />
						</div>
					</Link>
				)}
				{page + 1 >= maxPages ? (
					<div className={cn(styles.button, styles.button_disable)}>
						<IconChevronDoubleRightCircle size={20} />
					</div>
				) : (
					<Link href={`/news?p=${maxPages - 1}`}>
						<div className={styles.button}>
							<IconChevronDoubleRightCircle size={20} />
						</div>
					</Link>
				)}
			</div>
		</div>
	);
}
