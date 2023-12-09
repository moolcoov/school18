import { Gallery } from "./Gallery";
import { Videos } from "./Videos";

export function PostAttachments({ attachments }: { attachments?: VkWallGetPostAttachments }): JSX.Element {
	if (!attachments?.at(0)) {
		return <>{null}</>;
	}

	const images: VkWallGetPostAttachments = getImages(attachments);
	const videos: VkWallGetPostAttachments = getVideos(attachments);

	return (
		<div>
			<Gallery images={images as VkWallGetPostAttachmentPhoto[]} />
			<Videos videos={videos as VkWallGetPostAttachmentVideo[]} />
		</div>
	);
}

function getImages(attachments: VkWallGetPostAttachments): VkWallGetPostAttachments {
	return attachments.filter((attachment) => attachment.type === "photo");
}

function getVideos(attachments: VkWallGetPostAttachments): VkWallGetPostAttachments {
	return attachments.filter((attachment) => attachment.type === "video");
}
