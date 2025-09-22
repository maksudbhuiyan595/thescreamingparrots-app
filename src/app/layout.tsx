/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "The Screaming Parrots Cafe – Desserts, Tea & Bites in Redmond, WA",
  description:
    "The Screaming Parrots Cafe in Redmond, WA — serving late-night crepes, souffle pancakes, onigiri, tea, coffee & bakery treats",
  openGraph: {
    title: "The Screaming Parrots Cafe",
    description:
      "Desserts, tea, crepes, and bites open until late in Redmond, WA.",
    url: "https://www.thescreamingparrotscafe.com",
    siteName: "The Screaming Parrots Cafe",
    images: [
      {
        url: "https://www.thescreamingparrotscafe.com/og-image.jpg",
        width: 1200,
        height: 628,
        alt: "Desserts and drinks at The Screaming Parrots Cafe",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Screaming Parrots Cafe – Late-Night Desserts in Redmond, WA",
    description: "Crepes, souffle pancakes, onigiri, tea, coffee & more.",
    images: ["https://www.thescreamingparrotscafe.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P2LFJ3RG');`,
          }}
        />
      </head>
      <body className={`antialiased overflow-x-hidden !scroll-smooth`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P2LFJ3RG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
