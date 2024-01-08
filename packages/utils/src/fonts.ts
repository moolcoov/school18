import { Inter, Montserrat } from "next/font/google";
import { GeistSans } from "geist/font/sans";

export const montserrat = Montserrat({
	weight: ["300", "400", "500", "600", "700", "800", "900"],
	subsets: ["cyrillic", "latin"],
	variable: "--font-family-montserrat",
});

export const inter = Inter({
	// weight: ["300", "500", "800", "900"],
	subsets: ["cyrillic", "latin"],
	variable: "--font-family-inter",
});

export const geist = GeistSans;
