interface VkWallGetResponse {
	response: {
		count: number;
		items: VkWallGetPost[];
	};
}

interface VkWallGetPost {
	inner_type: string;
	is_pinned: 0 | 1;
	donut: {
		is_donut: boolean;
	};
	comments: {
		can_post: 0 | 1;
		can_view: 0 | 1;
		count: number;
		groups_can_post: boolean;
	};
	marked_as_ads: 0 | 1;
	short_text_rate: number;
	hash: string;
	type: string;
	attachments?: VkWallGetPostAttachments;
	date: number;
	from_id: number;
	id: number;
	likes: {
		can_like: 0 | 1;
		count: number;
		user_likes: 0 | 1;
		can_publish: 0 | 1;
		repost_disabled: boolean;
	};
	owner_id: number;
	post_source: {
		platform: string;
		type: string;
	};
	post_type: string;
	reposts: {
		count: 0 | 1;
		user_reposted: 0 | 1;
	};
	text: string;
	views: {
		count: number;
	};
	copy_history?: VkWallGetPost[];
}

type VkWallGetPostAttachments = VkWallGetPostAttachmentPhoto[];

interface VkWallGetPostAttachmentPhoto {
	type: "photo" | "video";
	photo: {
		album_id: number;
		date: number;
		id: number;
		owner_id: number;
		access_key: string;
		sizes: VkWallGetPostAttachmentPhotoSize[];
		text: string;
		user_id: number;
		web_view_token: string;
		has_tags: boolean;
	};
}

interface VkWallGetPostAttachmentPhotoSize {
	height: number;
	type: string;
	width: number;
	url: string;
}
