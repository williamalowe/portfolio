import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "William A Lowe",
  description: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode,
  modal: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-zinc-50 text-zinc-900`}>
        <Header />
        {children}
        {modal}
      </body>
    </html>
  );
}
