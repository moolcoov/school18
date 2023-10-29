import Skeleton from "react-loading-skeleton";

export function InfoWeatherFallback(): JSX.Element {
	return (
		<div style={{ display: "flex", gap: 5, flex: 1, lineHeight: 1, justifyContent: "center" }}>
			<Skeleton height={22} width={22} />
			<Skeleton height={22} width={37} />
		</div>
	);
}
