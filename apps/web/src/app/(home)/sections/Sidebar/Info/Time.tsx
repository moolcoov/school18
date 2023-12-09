import moment from "moment";

export function InfoTime(): JSX.Element {
	const date = moment().utcOffset("+8:00");

	return <div>{date.format("H:mm")}</div>;
}
