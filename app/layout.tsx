import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <div className="main">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
