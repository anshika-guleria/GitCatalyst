import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/provider/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://gitcatalyst.vercel.app"
  ),

  applicationName: "GitCatalyst",

  title: {
    default:
      "GitCatalyst - GitHub Analytics & README Widgets",
    template:
      "%s | GitCatalyst",
  },

  description:
    "Transform your GitHub profile into beautiful analytics dashboards, contribution insights, and customizable README widgets.",

  keywords: [
    "GitHub Analytics",
    "GitHub Stats",
    "GitHub Dashboard",
    "README Widgets",
    "Developer Analytics",
    "Open Source",
    "GitCatalyst",
  ],

  authors: [
    {
      name: "Anshika Guleria",
    },
  ],

  creator:
    "Anshika Guleria",

  openGraph: {
    title:
      "GitCatalyst - GitHub Analytics Platform",

    description:
      "Analyze GitHub activity, visualize contributions, and create beautiful developer widgets.",

    url:
      "https://gitcatalyst.vercel.app",

    siteName:
      "GitCatalyst",

    type:
      "website",

    locale:
      "en_US",

    images: [
      {
        url:
          "/og-image.png",

        width:
          1200,

        height:
          630,

        alt:
          "GitCatalyst GitHub Analytics Dashboard",
      },
    ],
  },


  twitter: {
    card:
      "summary_large_image",

    title:
      "GitCatalyst - GitHub Analytics",

    description:
      "Turn your GitHub activity into beautiful insights and widgets.",

    images:
      ["/og-image.png"],
  },


  icons: {
    icon:
      "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      suppressHydrationWarning
    >

      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          min-h-screen
          bg-background
          text-foreground
          antialiased
        `}
      >

        <ThemeProvider>
          {children}
        </ThemeProvider>

      </body>

    </html>
  );
}