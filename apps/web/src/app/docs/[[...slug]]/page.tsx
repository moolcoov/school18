import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import { DocsPath } from "../sections/DocsPath";
import { DocsSeeMore } from "../sections/DocsSeeMore";
import styles from "./Doc.module.scss";
import { sanityFetch } from "@/lib/sanity/fetch";
import type { SanityDoc } from "@/lib/sanity";

export default async function DocsPage({ params }: { params: { slug?: string[] } }): Promise<JSX.Element> {
	let doc: SanityDoc | undefined = await sanityFetch({
		query: groq`*[_type=="doc" && seo.slug.current=="${params.slug?.at(0) ?? "about"}"][0]`,
		tags: [`docs/${params.slug?.at(-1)}`],
	});

	const path = [doc];

	if (params.slug?.at(1)) {
		doc = doc?.children?.filter((child) => child.seo.slug.current === params.slug?.at(1)).at(0);
		path.push(doc);
	}

	if (params.slug?.at(2)) {
		doc = doc?.children?.filter((child) => child.seo.slug.current === params.slug?.at(2)).at(0);
		path.push(doc);
	}

	if (!doc) {
		notFound();
	}

	return (
		<article className={styles.doc}>
			{path.length > 1 ? <DocsPath path={path} /> : null}
			{doc.content ? (
				<div className="prose">
					<PortableText value={doc.content} />
				</div>
			) : null}
			<DocsSeeMore path={path} />
		</article>
	);
}
