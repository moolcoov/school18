import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req: NextRequest): Promise<Response> {
	try {
		const { isValidSignature, body } = await parseBody<{ _type: string; slug?: { current: string } }>(
			req,
			process.env.SANITY_REVALIDATE_SECRET,
		);

		if (!isValidSignature) {
			const message = "Invalid signature";
			return new Response(JSON.stringify({ message, isValidSignature, body }), { status: 401 });
		}

		if (!body?._type) {
			const message = "Bad Request";
			return new Response(JSON.stringify({ message, body }), { status: 400 });
		}

		switch (body._type) {
			case "doc":
				revalidateTag(`docs/${body.slug?.current}`);
				revalidateTag("docs");
				break;

			case "project":
				revalidateTag("project");
				break;

			default:
				revalidateTag(body._type);
				break;
		}

		return NextResponse.json({ body });
	} catch (e) {
		return new Response(e.message, { status: 500 });
	}
}
