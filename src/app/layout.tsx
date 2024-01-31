import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import { CardProvider } from "@/context/CardContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { Montserrat } from "next/font/google";
import "./global.css";

const bodyFont = Montserrat({
	subsets: ["latin"],
	weight: ["400", "600", "700", "900"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={bodyFont.className}>
				<ThemeProvider>
					<CardProvider>
						<div className="max-w-6xl min-h-screen my-0 mx-auto p-7 flex flex-col justify-between">
							<div>
								<Header />
								<Navbar />
							</div>
							{children}
							<Footer />
						</div>
					</CardProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
