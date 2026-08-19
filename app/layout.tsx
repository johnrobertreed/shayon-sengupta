import type { Metadata } from "next";
import { Geist, Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shayonsengupta.com"),
  title: "Shayon Sengupta — General Partner, Co-Head of Venture, Multicoin Capital",
  description:
    "Shayon Sengupta is General Partner and Co-Head of Venture at Multicoin Capital.",
  openGraph: {
    title: "Shayon Sengupta",
    description: "General Partner, Co-Head of Venture, Multicoin Capital",
    type: "website",
    images: [{ url: "/shayon.jpg", width: 700, height: 700 }],
  },
  twitter: {
    card: "summary",
    title: "Shayon Sengupta",
    description: "General Partner, Co-Head of Venture, Multicoin Capital",
    images: ["/shayon.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${newsreader.variable} ${geist.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
