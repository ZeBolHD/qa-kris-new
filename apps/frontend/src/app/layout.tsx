import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { cn } from "@lib/util";
import { Footer, Header } from "./_components";

export const metadata: Metadata = {
  title: "KrisQA",
  description: "Manual QA Mentor",
};

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "")}>
        <Header />
        <div className="overflow-x-hidden min-h-screen">{children}</div>
        <Footer />
        {/* <div className="w-full h-screen flex justify-center items-center xl:hidden">
          <p className="text-black px-[24px] text-center">
            Чтобы посмотреть информацию перейдите в десктоп версию
          </p>
        </div> */}
      </body>
    </html>
  );
}
