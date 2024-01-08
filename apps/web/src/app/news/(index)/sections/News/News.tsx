import cn from "classnames";
import { NewsInfo } from "../NewsInfo";
import { NewsContent } from "../NewsContent";
import { NewsSwitcher } from "../NewsSwitcher";
import styles from "./News.module.scss";
import { VkWallGet } from "@/lib/vk";

export async function News({ page }: { page: number }): Promise<JSX.Element> {
	const news: VkWallGetResponse = await VkWallGet({ count: 10, offset: page * 10 });

	return (
		<div className={cn("wrapper", styles.news)}>
			<div className={styles.news__content}>
				<NewsSwitcher newsCount={news.response?.count} page={page} />
				<NewsContent posts={news.response?.items} />
				<NewsSwitcher newsCount={news.response?.count} page={page} />
			</div>
			<NewsInfo newsCount={news.response?.count} page={page} />
		</div>
	);
}
