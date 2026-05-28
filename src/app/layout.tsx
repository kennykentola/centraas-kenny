import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Centraas - Lab Equipment Learning Platform",
  description: "A comprehensive educational platform teaching students how to operate AAS Machine and Centrifuge Machine through interactive modules, quizzes, and video tutorials.",
  keywords: ["Centraas", "AAS Machine", "Centrifuge", "Lab Equipment", "Education", "Spectrophotometer"],
  authors: [{ name: "Centraas Team" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Centraas - Lab Equipment Learning Platform",
    description: "Learn to operate AAS Machine and Centrifuge Machine through interactive modules.",
    siteName: "Centraas",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Centraas - Lab Equipment Learning Platform",
    description: "Learn to operate AAS Machine and Centrifuge Machine through interactive modules.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
