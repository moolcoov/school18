import { notFound } from "next/navigation";
import { Post } from "./sections/Post";
import { VkWallGetById } from "@/lib/vk";

export default async function NewsPostPage({ params }: { params: { id: string } }): Promise<JSX.Element> {
	const postResponse: VkWallGetResponse = await VkWallGetById({ id: params.id });
	const post: VkWallGetPost | undefined = postResponse.response.items.at(0);

	if (!post) {
		notFound();
	}

	return (
		<div className="wrapper">
			<Post group={postResponse.response.groups?.at(0)} post={post} />
		</div>
	);
}
