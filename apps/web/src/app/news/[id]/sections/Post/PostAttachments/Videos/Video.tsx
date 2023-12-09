import styles from "./Video.module.scss";

export function Video({ video }: { video: VkWallGetPostAttachmentVideo }): JSX.Element {
	return (
		<iframe
			allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
			allowFullScreen
			className={styles.video}
			src={`https://vk.com/video_ext.php?oid=${video.video.owner_id}&id=${video.video.id}`}
			title={`Vk Video Player ${video.video.id}`}
		/>
	);
}
