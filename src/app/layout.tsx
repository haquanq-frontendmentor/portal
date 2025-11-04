import { Header } from "@/components/Header";
import { appConfig } from "@/configs/appConfig";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Mentor Solutions Portal",
  icons: { icon: appConfig.basePath + "/favicon-32x32.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
