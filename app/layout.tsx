import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shrihari Pote — Portfolio",
  description:
    "Shrihari Gajanan Pote — second-year B.Tech Computer Technology student and freelance developer, Pune, India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
