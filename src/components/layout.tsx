'use client'
import Footer from "./Footer";
import Navbar from "./Navbar"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
