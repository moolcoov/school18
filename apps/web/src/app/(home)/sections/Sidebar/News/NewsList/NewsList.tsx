import styles from "../News.module.scss";
import { NewsItem } from "./NewsItem";
import { VkWallGet } from "@/lib/vk";

export async function NewsList(): Promise<JSX.Element> {
	const posts: VkWallGetResponse = await VkWallGet({ count: 3, offset: 0 });

	return (
		<div className={styles.news__items}>
			{posts.response.items.map((post) => (
				<NewsItem key={post.id} post={post} />
			))}
		</div>
	);
}
