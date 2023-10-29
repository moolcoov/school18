export async function WeathercloudValuesGet(): Promise<WeathercloudValues> {
	const res: Response = await fetch(
		`https://app.weathercloud.net/device/values?code=${process.env["WEATHERCLOUD.DEVICE_ID"]}`,
		{
			headers: { "X-Requested-With": `XMLHttpRequest` },
			cache: "no-cache",
		},
	);
	if (!res.ok) {
		throw new Error("Weathwercloud values get error");
	}
	await new Promise((r) => {
		setTimeout(r, 200);
	});

	const data: WeathercloudValues = await res.json();
	return data;
}
