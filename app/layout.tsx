import GlobalStyleProvider from "./providers/GlobalStyleProvider";
import ContextProvider from "./providers/ContextProvider";
import { ClerkProvider, auth } from "@clerk/nextjs";
import Sidebar from "./components/sidebar";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minhas Tarefas",
  description: "Gerenciador de tarefas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* font awesome cdn */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
            integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </head>
        <body className={inter.className} suppressHydrationWarning={true}>
          <ContextProvider>
            <GlobalStyleProvider>
              {userId && <Sidebar />}
              <div className="w-full">{children}</div>
            </GlobalStyleProvider>
          </ContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
