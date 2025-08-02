import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Load Inter font for non-Apple devices
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Visakh Portfolio",
  description: "Interactive portfolio with an AI-powered Memoji that answers questions about me, my skills, and my experience",
  keywords: [
    "Visakh",
    "Portfolio",
    "Developer",
    "AI", 
    "Interactive", 
    "Web Development",
    "Full Stack",
    "Next.js",
    "React"
  ],
  authors: [
    {
      name: "Visakh",
      url: "https://visakhsr.com",
    },
  ],
  creator: "Visakh",
  // openGraph: {
  //   type: "website",
  //   locale: "en_US",
  //   url: "https://visakhsr.com",
  //   title: "Visakh Portfolio",
  //   description: "Interactive portfolio with an AI-powered Memoji that answers questions about me",
  //   siteName: "Toukoum Portfolio",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Toukoum Portfolio",
  //   description: "Interactive portfolio with an AI-powered Memoji that answers questions about me",
  //   creator: "@toukoum",
  // },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        sizes: "any",
      }
    ],
    shortcut: "/favicon.svg?v=2",
    apple: "/apple-touch-icon.svg?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}