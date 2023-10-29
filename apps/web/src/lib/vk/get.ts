export async function VkWallGet(params: { count?: number; offset?: number }): Promise<VkWallGetResponse> {
	const { count = 10, offset = 0 } = params;
	const res: Response = await fetch(
		`https://api.vk.com/method/wall.get?v=${process.env["VK.API_VERSION"]}&domain=school18bratsk&count=${count}&offset=${offset}`,
		{
			headers: { Authorization: `Bearer ${process.env["VK.ACCESS_TOKEN"] ?? ""}` },
			cache: "no-cache",
		},
	);
	if (!res.ok) {
		throw new Error("News get error");
	}
	const data: VkWallGetResponse = await res.json();
	return data;
}
