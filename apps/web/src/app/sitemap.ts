import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const url = "https://school18.vercel.app";

	return [
		{
			url,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: `${url}/news`,
			lastModified: new Date(),
			changeFrequency: "hourly",
			priority: 0.8,
		},
	];
}
