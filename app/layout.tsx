import '@/styles/reset.css'
import '@/styles/globals.css'
import { Inter } from "@next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en" >
      <head />
      <body className={inter.className} id='bodyId' >
        <Header />
        <main className='md:px-24 px-8'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
