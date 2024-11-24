'use client'
// layout.tsx
import { useEffect, useState } from "react";
import localFont from "next/font/local";
import "./globals.css";

// Remove "use client" directive if you're exporting metadata
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Server-side layout without "use client"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true after the component is mounted on the client
  }, []);

  if (!isClient) {
    // Return null or a loading indicator during SSR
    return (
      <html lang="en">
        <body>Loading...</body>
      </html>
    );
  }

  return (
    <>
      {/* Preload fonts within <head> */}
      <head>
        <link rel="preload" href="/fonts/GeistVF.woff" as="font" type="font/woff" />
        <link rel="preload" href="/fonts/GeistMonoVF.woff" as="font" type="font/woff" />
        <title>Tourisme Français</title>
      </head>

      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </>
  );
}
