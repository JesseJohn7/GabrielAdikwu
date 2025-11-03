import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Faith Meets Focus",
  description: "Build consistency, grow spiritually, and stay inspired.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
