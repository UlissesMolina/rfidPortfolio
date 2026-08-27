
import "./globals.css";
import { Inter, Geist } from "next/font/google";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import NavBar from "./navbar";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "scroll-smooth", inter.className, "font-sans", geist.variable, "dark")}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
    {children}
  </body> 
    </html>
  );
}
