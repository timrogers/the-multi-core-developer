import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Multi-Core Developer | Unlock Your Parallel Potential",
  description: "Discover how background coding agents transform developers into multi-core powerhouses, enabling parallel work streams and exponential productivity.",
  keywords: ["multi-core developer", "coding agents", "AI assistance", "developer productivity", "parallel development"],
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
