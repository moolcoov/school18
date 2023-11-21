"use client";

import { Listbox } from "@headlessui/react";
import { useTheme } from "next-themes";
import { IconCheck, IconThemeDark, IconThemeLight, IconThemeSystem } from "ui";
import styles from "./ThemeSwitcher.module.scss";

const themes = [
	{
		name: "light",
		title: "Светлая",
		icon: "",
	},
	{
		name: "dark",
		title: "Темная",
		icon: "",
	},
	{
		name: "auto",
		title: "Системная",
		icon: "",
	},
];

export function ThemeSwitcher(): JSX.Element {
	const { theme, setTheme } = useTheme();

	return (
		<div className={styles["theme-switcher"]}>
			<Listbox onChange={setTheme} value={theme}>
				<>
					<Listbox.Button className={styles["theme-switcher__button"]}>
						<IconThemeDark size={21} />
					</Listbox.Button>

					<Listbox.Options as="div" className={styles["theme-switcher__options"]}>
						{[...themes].map((themeOption) => (
							<Listbox.Option
								as="button"
								className={styles["theme-switcher__option"]}
								key={themeOption.name}
								value={themeOption.name}
							>
								{({ selected }) => (
									<>
										<div className={styles["theme-switcher__option__info"]}>
											{getThemeIcon(themeOption.name)}
											{themeOption.title}
										</div>
										{selected ? <IconCheck size={12} /> : null}
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</>
			</Listbox>
		</div>
	);
}

function getThemeIcon(theme: string): JSX.Element {
	switch (theme) {
		case "auto":
			return <IconThemeSystem size={20} />;
		case "dark":
			return <IconThemeDark size={20} />;
		case "light":
			return <IconThemeLight size={20} />;
	}

	return <>{null}</>;
}
