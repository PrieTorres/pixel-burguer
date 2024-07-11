import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/Provider/Provider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LanguageContextProvider } from "@/components/Contexts/LanguagueContext";
import { ThemeProvider } from "styled-components";
import { theme } from "@/Styles/theme";
import { GlobalStyles } from "@/Styles/global-styles";

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

  return (
    <LanguageContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <html lang={"en"}>
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
      </ThemeProvider>
    </LanguageContextProvider>
  );
}
