import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ardic Tech",
  description: "Ardic Tech website",
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
