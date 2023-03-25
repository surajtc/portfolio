import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Nav from "./components/Nav";

export const metadata = {
  title: "Title",
  description: "Description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen w-full flex-col overflow-hidden bg-white dark:bg-gray-900 dark:text-white">
        <Nav />
        <main className="h-full w-full px-2 py-2.5 sm:px-4 overflow-auto">
          <div className="flex max-w-4xl mx-auto">
            <div>{children}</div>
          </div>
        </main>
        <footer className="px-2 py-4 sm:px-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <span className="block text-center text-gray-600 dark:text-gray-400">
            © 2023 ™ This is footer
          </span>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
