import { revalidateTag } from "next/cache";

export async function GET(request: Request): Promise<void> {
	const key = request.headers.get("Revalidate-Key");
	if (key === "news") {
		revalidateTag(key);
	}
}
