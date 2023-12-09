import cn from "classnames";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import type { Route } from "next";
import styles from "./PostCard.module.scss";

export function PostCard({ post }: { post: VkWallGetPost }): JSX.Element {
	const imageType = getImageType({ post });
	const image = post.attachments?.at(0) ? getImages(post.attachments).at(0) : undefined;
	const imageSize = image
		? getImageSize(image as VkWallGetPostAttachmentPhoto, imageType === "small" ? -4 : -1)
		: undefined;

	const date = moment(post.date * 1000).utcOffset("+8:00");
	const isPinned = post.is_pinned;
	const isRepost = post.copy_history;

	const text = getText(post.text, Boolean(imageSize), post.copy_history);

	return (
		<Link href={`/news/${post.from_id}_${post.id}` as Route}>
			<div className={cn(styles.card, styles[`card_${imageType}`], { [styles.card_pinned]: isPinned })}>
				{imageSize ? (
					<div className={cn(styles.card__image, styles[`card__image_${imageType}`])}>
						<Image alt={post.text} fill quality={100} src={imageSize.url} />
					</div>
				) : null}
				<div className={styles.card__info}>
					<h3 className={styles.card__info__title}>{text}</h3>
					<div className={styles.card__info__tags}>
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

function getImageType({ post }: { post: VkWallGetPost }): string {
	if (post.attachments?.length && post.attachments.length < 2) {
		return "cover";
	}

	if (post.text.length >= 25) {
		return "small";
	}

	return "cover";
}

function getImages(attachments: VkWallGetPostAttachments): VkWallGetPostAttachments {
	return attachments.filter((attachment) => attachment.type === "photo");
}

function getImageSize(image: VkWallGetPostAttachmentPhoto, index?: number): VkWallGetPostAttachmentPhotoSize | undefined {
	const sizes = [...image.photo.sizes].sort((a, b) => {
		if (a.width >= b.width) {
			return 1;
		}

		return -1;
	});

	return sizes.at(index ?? sizes.length - 1);
}

function getText(postText: string, hasImage: boolean, copyHistory?: VkWallGetPost[]): string {
	let text = "";

	if (postText) {
		text += postText;
	}

	if (copyHistory?.at(0)) {
		text += copyHistory.at(0)?.text;
	}

	if (text !== "") {
		return text;
	}

	if (hasImage) {
		return "🖼️ Картинка";
	}

	return "";
}
