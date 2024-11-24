// @ts-ignore
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Café mania",
  description: "PIT -2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
