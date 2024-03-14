import imageUrlBuilder from "@sanity/image-url";
import type { ImageUrlBuilder } from "sanity";
import { client } from "./client";
import type { SanityDefImage } from "./types";

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityDefImage): ImageUrlBuilder {
	return builder.image(source);
}
