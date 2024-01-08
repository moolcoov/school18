import { groq } from "next-sanity";
import cn from "classnames";
import styles from "./DocsNavigation.module.scss";
import { DocButton } from "./DocButton";
import { sanityFetch } from "@/lib/sanity/sanity.fetch";

export async function DocsNavigation(): Promise<JSX.Element> {
	const documents: SanityDoc[] = await sanityFetch({ query: groq`*[_type=="doc"]`, tags: ["docs"] });

	return (
		<div className={styles.navigation}>
			<div className={cn(styles.navigation__sections, "styled-scrollbar")}>
				{[...documents].map((section) => (
					<div className={styles.navigation__section} key={section.seo.slug.current}>
						<DocButton doc={section} slug={section.seo.slug.current} type="section" />
						{section.children ? (
							<div className={styles.navigation__docs}>
								{[...section.children].map((doc) => (
									<div key={doc.seo.slug.current}>
										<DocButton
											doc={doc}
											slug={[section.seo.slug.current, doc.seo.slug.current].join("/")}
											type="doc"
										/>
										{doc.children ? (
											<div>
												{[...doc.children].map((subdoc) => (
													<span key={subdoc.seo.slug.current} />
												))}
											</div>
										) : null}
									</div>
								))}
							</div>
						) : null}
					</div>
				))}
			</div>
		</div>
	);
}
