import { Heading } from "ui";
import { NewsFallback } from "./sections/News";

export default function NewsPageLoading(): JSX.Element {
	return (
		<>
			<div className="wrapper page-title">
				<Heading level="page">Новости</Heading>
			</div>

			<NewsFallback />
		</>
	);
}
