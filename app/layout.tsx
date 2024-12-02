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

        {/* Chipp Chat Widget */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.CHIPP_APP_URL = "https://emberwavewebdevelopment-26044.chipp.ai";
              window.CHIPP_APP_ID = 26044;
            `,
          }}
        ></script>
        <link
          rel="stylesheet"
          href="https://storage.googleapis.com/chipp-chat-widget-assets/build/bundle.css"
        />
        <script
          defer
          src="https://storage.googleapis.com/chipp-chat-widget-assets/build/bundle.js"
        ></script>
      </head>
      <body className="relative w-full h-full">
        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
