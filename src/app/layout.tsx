
import { Poppins } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
})
export const metadata: Metadata = {
  title: 'Next Design',
  description: 'Next Design is a Next.js template with Tailwind CSS and TypeScript',
}
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
