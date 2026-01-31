import "./globals.css";
import Home from "./page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Home />
      </body>
    </html>
  );
}
