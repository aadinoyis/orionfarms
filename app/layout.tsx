import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { BlogsProvider } from "@/context/blogsContext";
import { ItemsProvider } from "@/context/itemsContext";
import { AuthProvider } from "@/context/authContext";

const myFont = localFont({
  src: './fonts/Lexend.ttf',
  variable: '--lexend',
})

export const metadata: Metadata = {
  title: "Orion Farms",
  description: "Welcome to Orion farms, We are your strategic partner in farming and agro-allied business, Experience The Future of Agriculture Through Our Farm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myFont.variable} antialiased`}
      >
        <AuthProvider>  
          <BlogsProvider>
            <ItemsProvider>
              <Header/>
              {children}
              <Footer/>
            </ItemsProvider>
          </BlogsProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
