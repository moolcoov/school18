export function getWeatherState(bar: number, rainrate: number): string {
	const barTH = [1005, 1010, 1015];
	const rainrateTH = [2, 15];

	let state = "clear";

	if (bar < 0 || rainrate < 0) return "error";

	if (rainrate === 0) {
		if (bar < barTH[0]) state = "cloud";
		else if (bar < barTH[1]) state = "change";
		else if (bar < barTH[2]) state = "few";
		else state = "clear";
	} else if (rainrate < rainrateTH[0]) {
		state = "light";
	} else if (rainrate < rainrateTH[1]) {
		state = "moderate";
	} else {
		state = "heavy";
	}

	return state;
}

export function getWeatherEmojiByState(state: string): string {
	switch (state) {
		case "clear":
			return "☀️";
		case "cloud":
			return "🌥️";
		case "change":
			return "⛅";
		case "few":
			return "🌤️";
		case "light":
			return "🌦️";
		case "moderate":
			return "🌧️";
		case "heavy":
			return "⛈️";
		case "error":
		default:
			return "";
	}
}
