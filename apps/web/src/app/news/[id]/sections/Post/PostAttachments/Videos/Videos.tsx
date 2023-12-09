import { Video } from "./Video";

export function Videos({ videos }: { videos: VkWallGetPostAttachmentVideo[] }): JSX.Element {
	if (!videos.at(0)) {
		return <>{null}</>;
	}

	return (
		<>
			{[...videos].map((video) => (
				<Video key={video.video.id} video={video} />
			))}
		</>
	);
}
