import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/Component/Layout/Footer";
import Navbar from "@/Component/Layout/Navbar";
import { ProviderStore } from "./ProviderStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "VENTRA",
  description: "E-Commerce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ProviderStore>
        <Navbar />
          {children}
          </ProviderStore>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="dark"
        />
        <Footer />
      </body>
    </html>
  );
}
