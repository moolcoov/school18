export async function VkWallGet(params?: { count?: number; offset?: number }): Promise<VkWallGetResponse> {
	const { count = 10, offset = 0 } = params ?? {};
	const res: Response = await fetch(
		`https://api.vk.com/method/wall.get?v=${process.env["VK.API_VERSION"]}&domain=school18bratsk&count=${count}&offset=${offset}`,
		{
			headers: { Authorization: `Bearer ${process.env["VK.ACCESS_TOKEN"] ?? ""}` },
			cache: "no-cache",
			next: {
				tags: ["news"],
			},
		},
	);
	if (!res.ok) {
		throw new Error("News get error");
	}
	const data: VkWallGetResponse = await res.json();
	return data;
}

export async function VkWallGetById(params: { id: string }): Promise<VkWallGetResponse> {
	const { id = "" } = params;
	const res: Response = await fetch(
		`https://api.vk.com/method/wall.getById?v=${process.env["VK.API_VERSION"]}&posts=${id}&extended=1`,
		{
			headers: { Authorization: `Bearer ${process.env["VK.ACCESS_TOKEN"] ?? ""}` },
			next: {
				revalidate: 3600,
				tags: ["news"],
			},
		},
	);
	if (!res.ok) {
		throw new Error("Post get error");
	}
	const data: VkWallGetResponse = await res.json();
	return data;
}

// await new Promise((r) => {
// 	setTimeout(r, 22);
// });
