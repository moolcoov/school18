import { Heading } from "ui";
import type { Metadata } from "next";
import { Suspense } from "react";
import { News } from "./sections/News";
import { NewsFallback } from "./sections/News/News.fallback";

export const metadata: Metadata = {
	title: "Новости",
};

export default function NewsPage({
	searchParams,
}: {
	searchParams: Record<string, string | string[] | undefined>;
}): JSX.Element {
	const page = Number(searchParams.p ?? 0);

	return (
		<>
			<div className="wrapper page-title">
				<Heading level="page">Новости</Heading>
			</div>

			<Suspense fallback={<NewsFallback />}>
				<News page={page} />
			</Suspense>
		</>
	);
}
