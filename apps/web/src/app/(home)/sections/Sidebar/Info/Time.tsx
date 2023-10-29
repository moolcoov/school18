"use client";

export function InfoTime(): JSX.Element {
	const date = new Date();
	const time = date.toLocaleTimeString().split(":");

	return (
		<div>
			{time[0]}:{time[1]}
		</div>
	);
}
