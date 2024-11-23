import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

export const metadata = {
  title: "My Website",
  description: "A sample Next.js website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Header />
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
