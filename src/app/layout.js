import { Poppins, Raleway } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ["200", "400", "600", "800"],
  subsets: ["latin"], // Alt küme belirtildi
  preload: false, // Preload devre dışı bırakıldı
});

const raleway = Raleway({
  weight: ["200", "400", "600", "800"],
  subsets: ["latin"], // Alt küme belirtildi
  preload: false, // Preload devre dışı bırakıldı
});

export const metadata = {
  title: "DMG İnşaat & Proje",
  description: "DMG İNŞAAT PROJE MÜŞAVİRLİK TAAHÜT SANAYİ VE TİC.LTD.ŞTİ.",
  icons: {
    icon: "/Real_mini_logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="/Real_mini_logo.png" type="image/png" />
      </head> */}
      <body className={`${raleway.className} ${poppins.className}`}>
        {" "}
        <Header />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
