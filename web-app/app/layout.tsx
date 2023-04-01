import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import QueryWrapper from "./components/QueryWrapper";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export const metadata = {
  title: "Suraj T C",
  description: "Developer Protfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryWrapper>
        <body className="h-screen w-full flex flex-col overflow-hidden bg-white text-slate-900 dark:bg-gray-900 dark:text-white">
          <Header />
          <Main>{children}</Main>
          <Analytics />
        </body>
      </QueryWrapper>
    </html>
  );
}
