import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import styles from "../News.module.scss";

export function NewsItem({ post }: { post: VkWallGetPost }): JSX.Element {
	const image = getImage(post.attachments, post.copy_history);
	const imageUrl = getImageSize(image)?.url;
	const text = getText(post.text, Boolean(imageUrl));
	const id = `${post.from_id}_${post.id}`;

	const date = moment(post.date * 1000);
	const isPinned = post.is_pinned;
	const isRepost = post.copy_history;

	return (
		<Link href={`/news/${id}`}>
			<div className={styles.news__item}>
				{imageUrl ? (
					<div className={styles.news__item__image}>
						<Image alt={post.text} fill src={imageUrl.toString()} />
					</div>
				) : null}
				<div className={styles.news__item__info}>
					<h3 className={styles.news__item__heading}>{text}</h3>
					<div className={styles.news__item__tags}>
						<span>{date.format("LT")}</span>
						<span>•</span>
						<span>{date.format("D MMMM")}</span>
						{isPinned ? (
							<>
								<span>•</span>
								<span>📌 Закреплено</span>
							</>
						) : null}
						{isRepost ? (
							<>
								<span>•</span>
								<span>🔁 Репост</span>
							</>
						) : null}
					</div>
				</div>
			</div>
		</Link>
	);
}

function getText(postText: string, hasImage: boolean): string {
	if (postText) {
		return postText;
	}

	if (hasImage) {
		return "🖼️ Картинка";
	}

	return "";
}

function getImage(
	attachments?: VkWallGetPostAttachments,
	copyHistory?: VkWallGetPost[],
): VkWallGetPostAttachmentPhoto | undefined {
	if (attachments) {
		for (const attachment of attachments) {
			if (attachment.type === "photo") {
				return attachment;
			}
		}
	}

	if (copyHistory) {
		for (const post of copyHistory) {
			const image = getImage(post.attachments, undefined);
			if (image) {
				return image;
			}
		}
	}

	return undefined;
}

function getImageSize(image?: VkWallGetPostAttachmentPhoto): VkWallGetPostAttachmentPhotoSize | undefined {
	if (!image) {
		return undefined;
	}
	const sizes = [...image.photo.sizes].filter((size) => size.width);
	return sizes.at(0);
}
