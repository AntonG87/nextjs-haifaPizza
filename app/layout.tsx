import { Nunito } from 'next/font/google';
import './globals.css';
import React from "react";


const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <link data-rh='true' rel="icon" href="/logo1.png" />
      <body className={nunito.className}>
      {children}
      </body>
    </html>
  );
}
