import type { Metadata } from "next";
import "./globals.css";
import ClientOnly from "@/components/ClientOnly";
import Navbar from "@/components/Navbar";
import VsCodeSidebar from "@/components/VsCodeSidebar";

export const metadata: Metadata = {
  title: "Godse-07 | Portfolio",
  description: "VS portfolio",
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      {/* keep className on body SSR'd, but render body contents client-side */}
      <body className="antialiased">
        <ClientOnly>
          <div className="w-full fixed top-0 left-0 z-50 bg-[#1e1f29] border-b">
            <Navbar />
          </div>
          <div className="pt-[30px] flex w-full">
            <VsCodeSidebar />
            <main className="flex-1 bg-[#23242f] overflow-auto">{children}</main>
          </div>
        </ClientOnly>
      </body>
    </html>
  );
}
