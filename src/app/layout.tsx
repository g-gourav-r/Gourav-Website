import { ThemeProvider } from "./components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type React from "react";
import Script from "next/script"; // Import the Script component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gourav R - Full-Stack Developer",
  description:
    "An experienced full-stack developer with a strong record of delivering end-to-end web applications. Expert in designing and building responsive user interfaces with React.js and Next.js, and architecting scalable back-end services using Python (FastAPI) and Node.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* GTM Head Snippet */}
      <Script
        id="gtm-script-head"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NR4GNP7M');`,
        }}
      />
      <html lang="en" suppressHydrationWarning>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  name: "Gourav R",
                  url: "https://www.gouravr.com/",
                },
                {
                  "@type": "Organization",
                  name: "Gourav R",
                  url: "https://www.gouravr.com/",
                  logo: "https://www.gouravr.com/logo.png",
                  sameAs: [
                    "https://linkedin.com/in/gourav-r",
                    "https://github.com/g-gourav-r",
                  ],
                },
              ],
            }),
          }}
        />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
            inter.className
          )}
        >
          {/* GTM Body Snippet (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NR4GNP7M"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
