/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	transpilePackages: ["ui", "utils"],

	experimental: {
		typedRoutes: true,
	},

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**.userapi.com",
			},
			{
				protocol: "https",
				hostname: "vk.com",
			},
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
			},
		],
	},
};

module.exports = nextConfig;
