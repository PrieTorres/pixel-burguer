import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/Provider/Provider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LanguageContextProvider, useLanguageContext } from "@/components/Contexts/LanguagueContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixel Burguer - Delicious Pixels",
  description: "Next app ecommerce simulator from a some dev, please don't try to order here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {i18n} = useLanguageContext();

  return (
    <LanguageContextProvider>
      <html lang={i18n.language}>
        <body className={inter.className}>
          <Provider>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </Provider>
        </body>
      </html>
    </LanguageContextProvider>
  );
}
