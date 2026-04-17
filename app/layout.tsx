import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jimmy Tran · Developer",
  description: "Full-stack developer portfolio — building things on the web.",
  openGraph: {
    title: "Jimmy Tran · Developer",
    description: "Full-stack developer portfolio",
    type: "website",
  },
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
