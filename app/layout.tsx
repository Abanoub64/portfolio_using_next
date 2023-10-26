import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ActiveSectionContextProvider } from "@/Context/active-section-context";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/themeSwitch";
import ThemeContextProvider from "@/Context/themeContext";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abanoub / personal portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className=" !scroll-smooth" lang="en">
      <body
        // ${inter.className}
        className={` pt-28 sm:pt-36 relative text-gray-950 bg-gray-50
        dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90
         `}
      >
        <div className=" bg-[#fbe2e3] absolute top-[-6rem]  right-[11rem] h-[31.25rem] -z-10  dark:bg-[#945263] sm:w-[68.7rem] rounded-full blur-[10rem] w-[31.25rem]"></div>
        <div className=" bg-[#dbd7fb] dark:bg-[#676394] absolute top-[-1rem]  left-[-35rem] h-[31.25rem] -z-10 sm:w-[68.7rem] rounded-full blur-[10rem] w-[50rem]  md:left-[-33rem]  lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>
        <ActiveSectionContextProvider>
          <ThemeContextProvider>
            <Header />
            {children}
            <Toaster position="top-center" />
            <ThemeSwitch />
            <Footer />
          </ThemeContextProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
