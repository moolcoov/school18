import "@/styles/globals.scss";
import "moment/locale/ru";
import "react-loading-skeleton/dist/skeleton.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { inter, montserrat, geist } from "utils";
import { SkeletonTheme } from "react-loading-skeleton";
import { ThemeContextProvider } from "@/contexts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
	title: {
		default: "Школа 18 Братск - Школа, где ценят",
		template: "%s | Школа 18 Братск",
	},
	description: "МБОУ СОШ №18. Новости, проекты, учителя",
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<html className={`${inter.variable} ${montserrat.variable} ${geist.variable}`} lang="ru" suppressHydrationWarning>
			<body>
				<ThemeContextProvider>
					<SkeletonTheme
						baseColor="var(--color-background-400)"
						borderRadius={5}
						highlightColor="var(--color-background-500)"
					>
						<div className="page">
							<Header />
							{children}
							<Footer />
						</div>
					</SkeletonTheme>
				</ThemeContextProvider>
				<Analytics />
			</body>
		</html>
	);
}
