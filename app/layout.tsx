import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "EmberWave",
  description:
    "Providing AI Integration, Web Development, & Consultancy headquartered in Greenville, SC.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="relative w-full h-full">
        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
