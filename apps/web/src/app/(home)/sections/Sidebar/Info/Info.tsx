import cn from "classnames";
import { Suspense } from "react";
import sectionStyles from "../Sidebar.module.scss";
import styles from "./Info.module.scss";
import { InfoTime } from "./Time";
import { InfoWeather, InfoWeatherFallback } from "./Weather";

export function Info(): JSX.Element {
	return (
		<div className={cn(sectionStyles.section, styles.info)}>
			<InfoTime />
			<Suspense fallback={<InfoWeatherFallback />}>
				<InfoWeather />
			</Suspense>
		</div>
	);
}
