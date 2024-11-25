import "./globals.css";
import Navbar from "@/components/Navbar";


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
        
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
