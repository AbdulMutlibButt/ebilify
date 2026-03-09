import type { Metadata } from "next";
import HomeScreen from "./Home/page";

export const metadata: Metadata = {
  title: "Ebilify | Digital Solutions, Writing & Brand Services | Home",
  description:
    "Transform your brand with Ebilify's professional digital solutions, expert writing services, and strategic consulting. Get started with cutting-edge digital transformation today.",
  keywords: [
    "digital solutions",
    "writing services",
    "content creation",
    "brand development",
    "professional consulting",
  ],
  openGraph: {
    title: "Ebilify | Digital Solutions, Writing & Brand Services",
    description:
      "Transform your brand with professional digital solutions and expert writing services.",
    url: "https://ebilify.com",
    type: "website",
    images: [
      {
        url: "/icon.jpg",
        width: 1200,
        height: 630,
        alt: "Ebilify - Home",
      },
    ],
  },
  alternates: {
    canonical: "https://ebilify.com",
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <HomeScreen />
    </main>
  );
}
