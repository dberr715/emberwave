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
      <body className="relative w-full h-full">
        <Navbar />
        {/* <video
          id="background-video"
          src="/compressed-embersfire.mp4"
          autoPlay
          loop
          muted
        ></video> */}
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
