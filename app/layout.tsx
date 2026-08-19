import type { Metadata } from "next";
import { Geist, Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["400", "500"],
  style: ["normal", "italic"],
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

const themeInit = `(function(){try{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='light';}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className={`${inter.variable} ${newsreader.variable} ${geist.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
