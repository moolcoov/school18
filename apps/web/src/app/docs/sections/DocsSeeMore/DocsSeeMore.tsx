import Link from "next/link";
import styles from "./DocsSeeMore.module.scss";
import type { SanityDoc } from "@/lib/sanity";

export function DocsSeeMore({ path }: { path: (SanityDoc | undefined)[] }): JSX.Element {
	let docs = path.at(0)?.children;

	const paths = [path.at(-1)];

	if (path.at(1)) {
		docs = path.at(1)?.children;
		paths.push(path[1]);
	}

	if (path.at(2)?.children) {
		docs = path.at(2)?.children;
		paths.push(path[2]);
	}

	if (!docs) {
		return <>{null}</>;
	}

	return (
		<div className={styles.docs}>
			{[...docs].map((doc) => (
				<div className={styles.doc} key={doc.seo.slug.current}>
					<Link className={styles.doc__link} href={getPath(paths, doc)} />
					<div className="">
						<h3 className={styles.doc__title}>{doc.seo.title}</h3>
						{doc.seo.description ? <p>{doc.seo.description}</p> : null}
					</div>
				</div>
			))}
		</div>
	);
}

function getPath(paths: (SanityDoc | undefined)[], doc: SanityDoc): string {
	let res = "/docs/";

	[...paths.reverse()].forEach((path) => {
		if (!path) {
			return;
		}

		res += `${path.seo.slug.current}/`;
	});

	return `${res}${doc.seo.slug.current}`;
}
