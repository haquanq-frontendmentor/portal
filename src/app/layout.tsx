import { Header } from "@/components/Header";
import { appConfig } from "@/configs/appConfig";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Mentor Solutions Portal",
  icons: { icon: appConfig.basePath + "/favicon-32x32.png" },
  alternates: {
    canonical: "https://haquanq-frontendmentor.github.io/portal/",
  },
  openGraph: {
    images: [appConfig.basePath + "/opengraph-image.jpg"],
    url: "https://haquanq-frontendmentor.github.io/portal/",
    description:
      "A collection of my Frontend Mentor challenge solutions that demonstrates responsive UI layouts, attention to details and usages of various technologies. Each project highlights practical problems in modern web development.",
    locale: "en_US",
  },
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
