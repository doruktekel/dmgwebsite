import { Abel, Raleway } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const abel = Abel({
  weight: "400",
  subsets: ["latin"], // Alt küme belirtildi
  preload: false, // Preload devre dışı bırakıldı
});

const raleway = Raleway({
  weight: ["200", "400", "600", "800"],
  subsets: ["latin"], // Alt küme belirtildi
  preload: false, // Preload devre dışı bırakıldı
});

export const metadata = {
  title: "DMG",
  description: "DMG İNŞAAT PROJE MÜŞAVİRLİK TAAHÜT SANAYİ VE TİC.LTD.ŞTİ.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.className} ${abel.className}`}>
        {" "}
        {/* Hem Abel hem Raleway className ekleniyor */}
        <Header />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
