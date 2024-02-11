import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "../components/TransitionProvider";

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
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
