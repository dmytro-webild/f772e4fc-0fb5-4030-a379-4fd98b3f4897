import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Patzees | Event Decorations & Rentals',
  description: 'Patzees specializes in exquisite wedding decorations, event setups, and decoration rentals to make your special day unforgettable. From elegant ceremonies to vibrant celebrations, we bring your vision to life.',
  openGraph: {
    "title": "Patzees | Event Decorations & Rentals",
    "description": "Patzees specializes in exquisite wedding decorations, event setups, and decoration rentals to make your special day unforgettable. From elegant ceremonies to vibrant celebrations, we bring your vision to life.",
    "url": "https://www.patzees.com",
    "siteName": "Patzees",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/pink-roses-with-heart-shape_1258-10.jpg",
        "alt": "Elegant wedding reception decor"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Patzees | Event Decorations & Rentals",
    "description": "Patzees specializes in exquisite wedding decorations, event setups, and decoration rentals to make your special day unforgettable. From elegant ceremonies to vibrant celebrations, we bring your vision to life.",
    "images": [
      "http://img.b2bpic.net/free-photo/pink-roses-with-heart-shape_1258-10.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} ${openSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
