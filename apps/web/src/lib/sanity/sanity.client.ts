import type { SanityClient } from "next-sanity";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./sanity.api";

export const client: SanityClient = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: false,
	perspective: "published",
});
