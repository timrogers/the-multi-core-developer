import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Multi-Core Developer",
  description: "Explore how background coding agents enable developers to parallelize their work and become multi-core",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
