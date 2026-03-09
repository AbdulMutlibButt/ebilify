import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import StickyActions from "../components/StickyActions";
import { Toaster } from "sonner";
import { StructuredData } from "../components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ebilify | Professional Digital Solutions & Writing Services",
  description:
    "Ebilify provides professional digital solutions, content writing, and brand development services to elevate your business. High-quality SEO-optimized content & strategic consulting.",
  keywords: [
    "digital solutions",
    "writing services",
    "content creation",
    "brand development",
    "digital marketing",
    "professional services",
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      {
        url: "/icon.jpg",
        type: "image/jpg",
      },
    ],
    apple: "/icon.jpg",
  },
  openGraph: {
    title: "Ebilify | Professional Digital Solutions & Writing Services",
    description:
      "Professional digital solutions, content writing, and brand development services to elevate your business.",
    url: "https://ebilify.com",
    siteName: "Ebilify",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/icon.jpg",
        width: 1200,
        height: 630,
        alt: "Ebilify - Professional Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebilify | Professional Digital Solutions & Writing Services",
    description:
      "Professional digital solutions, content writing, and brand development services.",
    images: ["/icon.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://ebilify.com",
  },
  metadataBase: new URL("https://ebilify.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="grow">{children}</main>
            <Footer />
            <StickyActions />
          </div>
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
