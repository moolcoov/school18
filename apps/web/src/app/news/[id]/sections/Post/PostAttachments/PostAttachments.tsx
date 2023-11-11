import { Gallery } from "./Gallery";

export function PostAttachments({ attachments }: { attachments?: VkWallGetPostAttachments }): JSX.Element {
	if (!attachments?.at(0)) {
		return <>{null}</>;
	}

	const images = getImages(attachments);

	return (
		<div>
			<Gallery images={images} />
		</div>
	);
}

function getImages(attachments: VkWallGetPostAttachments): VkWallGetPostAttachmentPhoto[] {
	return attachments.filter((attachment) => attachment.type === "photo");
}
