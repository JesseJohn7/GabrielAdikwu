import "./globals.css";
import Navbar from "./components/Navbar";
import { organizationSchema } from "./structured-data";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gabriel-adikwu.vercel.app"),
  title: "Gabriel Adikwu & Co. - Principal Attorneys & Legal Services in Nigeria",
  description:
    "Expert law firm in Nigeria offering corporate law, legal advocacy, and consultation services. Led by Gabriel Adikwu with proven track record in legal representation across Nigeria.",
  keywords: [
    "Gabriel Adikwu",
    "Gabriel Adikwu & Co.",
    "Law firm Nigeria",
    "Legal services Nigeria",
    "Attorneys Nigeria",
    "Corporate law Nigeria",
    "Legal advocacy",
    "Nigerian lawyers",
    "Professional legal representation",
    "Abuja law firm",
    "Lagos law firm",
  ],
  authors: [{ name: "Gabriel Adikwu & Co.", url: "https://gabriel-adikwu.vercel.app" }],
  creator: "Gabriel Adikwu & Co.",
  publisher: "Gabriel Adikwu & Co.",
  formatDetection: {
    email: true,
    telephone: true,
  },
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Gabriel Adikwu & Co. - Expert Legal Solutions in Nigeria",
    description:
      "Professional legal representation, corporate law, and advocacy services across Nigeria.",
    url: "https://gabriel-adikwu.vercel.app",
    siteName: "Gabriel Adikwu & Co.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Gabriel Adikwu & Co. - Law Firm",
        type: "image/jpeg",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Adikwu & Co. - Legal Services",
    description:
      "Expert legal services and professional representation in Nigeria.",
    creator: "@gabrieladikwu",
    images: ["/logo.jpg"],
    site: "@gabrieladikwu",
  },
  alternates: {
    canonical: "https://gabriel-adikwu.vercel.app",
    languages: {
      "en-NG": "https://gabriel-adikwu.vercel.app",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "googlef6b1d39847845f4e",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta charSet="utf-8" />
        <meta
          name="google-site-verification"
          content="GR5f_pq347SCVKI43cRiAIoZf8O5OLiM6lU3iWuN-tE"
        />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        
        {/* Preconnect to external resources for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
      </head>
      <body>
        <Navbar />
        {children}
        
        {/* Performance & Tracking Scripts */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_GA_ID', {
                page_path: window.location.pathname,
                anonymize_ip: true,
              });
            `,
          }}
        />
      </body>
    </html>
  );
}