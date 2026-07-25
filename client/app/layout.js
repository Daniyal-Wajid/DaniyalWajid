import "./globals.css";
import "../src/App.css";
import "../src/components/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { withBasePath } from "../src/utils/basePath";

export const metadata = {
  title: "Daniyal Wajid | Portfolio",
  description: "MERN Stack Developer and Web Designer portfolio",
  icons: [
    { rel: "icon", url: withBasePath("/daniyal.png") },
    { rel: "shortcut icon", url: withBasePath("/daniyal.png") },
    { rel: "apple-touch-icon", url: withBasePath("/daniyal.png") },
  ],
  manifest: withBasePath("/site.webmanifest"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
