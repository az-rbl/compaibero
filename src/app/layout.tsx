import Chat from "@/components/Chat";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Compa Ibero 😎",
  description: "Tu mejor amigo en la Ibero",
  icons: [
    {
      rel: "icon",
      href: "/logo.svg",
      url: "/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <Chat />
          {children}
        </body>
      </Providers>
    </html>
  );
}
