import { getWeatherEmojiByState, getWeatherState } from "@/lib/weathercloud";
import { WeathercloudValuesGet } from "@/lib/weathercloud/get";

export async function InfoWeather(): Promise<JSX.Element> {
	const weather: WeathercloudValues = await WeathercloudValuesGet();

	if (!weather.temp) {
		return <div>❗°C</div>;
	}

	const weatherState = getWeatherState(weather.bar, weather.rainrate);
	const emoji = getWeatherEmojiByState(weatherState);

	return (
		<div>
			{emoji} {weather.temp.toFixed()}°C
		</div>
	);
}
