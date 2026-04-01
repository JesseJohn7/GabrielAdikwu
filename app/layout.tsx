import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Gabriel Adikwu & Co.Principal Attorneys in Nigeria",
  description:
    "Gabriel Adikwu & Co. is a distinguished law firm offering expert legal solutions, advocacy, and consultation services across Nigeria.",
  keywords: [
    "Gabriel Adikwu",
    "Gabriel Adikwu & Co.",
    "Legal services",
    "Attorneys",
    "Advocate",
    "Law firm in Nigeria",
    "Corporate law",
  ],
  authors: [{ name: "Gabriel Adikwu & Co." }],
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Gabriel Adikwu & Co. Expert Legal Solutions",
    description:
      "Professional legal representation and consultation across Nigeria.",
    url: "https://gabriel-adikwu.vercel.app",
    siteName: "Gabriel Adikwu & Co.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Gabriel Adikwu & Co.",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Adikwu & Co.",
    description:
      "Expert legal services and professional representation in Nigeria.",
    creator: "@gabrieladikwu",
    images: ["/logo.jpg"],
  },
  alternates: {
    canonical: "https://gabriel-adikwu.vercel.app",
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
        <meta
          name="google-site-verification"
          content="GR5f_pq347SCVKI43cRiAIoZf8O5OLiM6lU3iWuN-tE"
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}