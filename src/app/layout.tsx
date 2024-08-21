import type { Metadata } from "next";
import { Inter } from "next/font/google"
import { Provider } from "@/components/Provider/Provider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LanguageContextProvider } from "@/components/Contexts/LanguageContext";
import '../Styles/global.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixel Burguer - Delicious Pixels",
  description: "Next app ecommerce simulator from some dev, please don't try to order here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <LanguageContextProvider>
      <html lang="en">
        <body>
          <Provider>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
            <div id="default-portal"></div>
          </Provider>
        </body>
      </html>
    </LanguageContextProvider>
  );
}
