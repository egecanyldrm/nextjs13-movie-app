import '@/styles/reset.css'
import '@/styles/globals.css'
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en" >
      <head />
      <body className={inter.className} >
        <Header />
        <main className='container mx-auto min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
