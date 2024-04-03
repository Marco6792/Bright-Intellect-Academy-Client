import type { Metadata } from "next";
import { Poppins, Josefin_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	variable: "--font-Poppins",
});
const josefin = Josefin_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	variable: "--font-Josefin",
});

export const metadata: Metadata = {
	title: "Bright Intelect Academy",
	description: "GCE MAX",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${poppins.variable} ${josefin.variable} !bg-white dark:bg-gradient-to-b dark:from-gray-900 transition bg-no-repeat dark:to-black duration-300`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
