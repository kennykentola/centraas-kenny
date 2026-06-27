import type { Metadata } from "next";
import "./globals.css";
import { AuthButton } from "@/components/auth-button";
import { ProfileSyncProvider } from "@/components/profile-sync-provider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL('https://centaaskentola.netlify.app'),
  title: {
    default: "Centraas - Laboratory Equipment Learning Platform",
    template: "%s | Centraas",
  },
  description: "A safety-first educational platform for learning AAS Machine and Centrifuge Machine operation through structured modules, SOPs, quizzes, glossary, references, and practical guidance.",
  keywords: ["Centraas", "AAS Machine", "Atomic Absorption Spectrophotometer", "Centrifuge", "Laboratory Safety", "SOP", "Science Education", "Analytical Chemistry"],
  authors: [{ name: "Centraas Team" }],
  creator: "Centraas Team",
  publisher: "Centraas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Centraas - Laboratory Equipment Learning Platform",
    description: "Learn AAS Machine and Centrifuge operation through structured modules, SOPs, quizzes, and safety-first training.",
    url: "https://centaaskentola.netlify.app/",
    siteName: "Centraas",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Centraas laboratory learning platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Centraas - Laboratory Equipment Learning Platform",
    description: "Safety-first AAS and Centrifuge learning modules with SOPs, quizzes, glossary, and references.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        <ProfileSyncProvider />
        <div className="sticky top-0 z-[60] border-b border-white/10 bg-slate-950/90 px-4 py-2 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 text-xs text-slate-200">
            <span>Safety-first AAS and centrifuge learning</span>
            <AuthButton />
          </div>
        </div>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
