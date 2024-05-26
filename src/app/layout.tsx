"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FaRegMoon } from "react-icons/fa6";
import Button from "@/components/Button";
import { useEffect, useState } from "react";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isHydrated, setIsHydrated] = useState(false)

  // Wait till Next.js rehydration completes
  useEffect(() => {
    setIsHydrated(true)
  }, [])
  
  return (
    <html lang="en">

      <body className={inter.className}>
        <header className="flex justify-between px-14 py-8 bg-white shadow-md">
          <h1 className="font-bold text-lg">Where in the world?</h1>
          <Button title="Dark Mode" style="flex-row-reverse" onClick={()=>{alert('hey')}}>
            <FaRegMoon />
          </Button>
        </header>
        {isHydrated ? <div>{children}</div> : null}
      </body>
    </html>
  );
}
