import "./globals.css";
import "../src/App.css";
import "../src/components/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: "Daniyal Wajid | Portfolio",
  description: "MERN Stack Developer and Web Designer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
