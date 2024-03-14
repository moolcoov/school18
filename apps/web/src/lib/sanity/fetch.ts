import "server-only";

import type { QueryParams } from "@sanity/client";
import { draftMode } from "next/headers";
import { client } from "./client";
import { isProduction } from "./api";

export const token = process.env.SANITY_API_READ_TOKEN;

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

export async function sanityFetch<QueryResponse>({
	query,
	params = DEFAULT_PARAMS,
	tags = DEFAULT_TAGS,
}: {
	query: string;
	params?: QueryParams;
	tags: string[];
}): Promise<QueryResponse> {
	const isDraftMode = draftMode().isEnabled;
	if (isDraftMode && !token) {
		throw new Error("The `SANITY_API_READ_TOKEN` environment variable is required.");
	}

	const sanityClient = client.config().useCdn && isDraftMode ? client.withConfig({ useCdn: false }) : client;
	const res: QueryResponse = await sanityClient.fetch<QueryResponse>(query, params, {
		cache: isProduction ? "force-cache" : "no-store",
		...(isDraftMode && {
			cache: undefined,
			token,
			perspective: "previewDrafts",
		}),
		next: {
			...(isDraftMode && { revalidate: 30 }),
			tags,
		},
	});
	return res;
}
