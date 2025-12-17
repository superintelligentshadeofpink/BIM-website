import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bold in Magenta - Beautiful Apps for a Rich Life",
  description: "Creating the apps that you love to use to romanticise the everyday. Manifest369 - the manifestation tool of your dreams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
