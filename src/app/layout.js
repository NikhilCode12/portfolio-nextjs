import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nikhil Sharma - Full Stack Developer Portfolio",
  description:
    "Developer Portfolio of Nikhil Sharma made with Next.js, Tailwind CSS, and MDX.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen bg-gray-900">
          <div className="h-24">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)]">{children}</div>
        </div>
      </body>
    </html>
  );
}
