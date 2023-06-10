import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "JC PRESTIGE HOTEL",
  description: "Hotel jc prestige bastos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
