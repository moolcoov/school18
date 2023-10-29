"use client";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

export function ThemeContextProvider({ children }: { children: ReactNode }): JSX.Element {
	return (
		<ThemeProvider attribute="data-theme" defaultTheme="auto" storageKey="ui-theme" themes={["auto", "light", "dark"]}>
			<>{children}</>
		</ThemeProvider>
	);
}
