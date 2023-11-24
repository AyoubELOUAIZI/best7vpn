import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ReversHero from "./components/ReversHero";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata = {
  title: "Best7vpn - VPN Reviews",
  description:
    "Explore the best VPN services with detailed reviews. Find the perfect VPN for your needs and enhance your online security and privacy.",
  icons: {
    icon: "/b7vLogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_TRACKING_ID="G-7L8Q3VNVRD" />
      <body className={roboto.className}>
        <Navbar />
        <div className="pt-16">{children}</div>
        <ReversHero />
        <Footer />
      </body>
    </html>
  );
}
