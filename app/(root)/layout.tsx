import React from "react";
import {Header} from "@/shared/components/shared";


export default function HomeLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
      <main className='min-h-screen'>
        <Header className={''}></Header>
        {children}
        {modal}
      </main>
      </body>
    </html>
  );
}
