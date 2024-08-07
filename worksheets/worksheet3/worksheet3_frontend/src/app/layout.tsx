import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import BootstrapClient from "@/components/BootstrapClient";

const inter = Inter({subsets:["latin"]});

export const metadata: Metadata = {
  title:"create Next App",
  description:"Generated by create next app",
}

export default function RootLayout({
  children,
}:Readonly<{
  children:React.ReactNode;
}>){
  return(
    <html lang="en">
      <body className="{inter.className}">
        <BootstrapClient/>
        {children}
      </body>
    </html>
  );
}