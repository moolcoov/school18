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
		],
	},
};

module.exports = nextConfig;
