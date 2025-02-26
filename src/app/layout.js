// import { Poppins, Raleway } from "next/font/google";
// import { ToastContainer } from "react-toastify";
// import "./globals.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// const poppins = Poppins({
//   weight: ["200", "400", "600", "800"],
//   subsets: ["latin"], // Alt küme belirtildi
//   preload: false, // Preload devre dışı bırakıldı
// });

// const raleway = Raleway({
//   weight: ["200", "400", "600", "800"],
//   subsets: ["latin"], // Alt küme belirtildi
//   preload: false, // Preload devre dışı bırakıldı
// });

// export const metadata = {
//   title: "DMG",
//   description: "DMG İNŞAAT PROJE MÜŞAVİRLİK TAAHÜT SANAYİ VE TİC.LTD.ŞTİ.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${raleway.className} ${poppins.className}`}>
//         {" "}
//         {/* Hem Abel hem Raleway className ekleniyor */}
//         <Header />
//         {children}
//         <Footer />
//         <ToastContainer />
//       </body>
//     </html>
//   );
// }

import { Poppins, Raleway } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ["200", "400", "600", "800"],
  subsets: ["latin"],
  preload: false,
});

const raleway = Raleway({
  weight: ["200", "400", "600", "800"],
  subsets: ["latin"],
  preload: false,
});

export const metadata = {
  title: "DMG",
  description: "DMG İNŞAAT PROJE MÜŞAVİRLİK TAAHÜT SANAYİ VE TİC.LTD.ŞTİ.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* reCAPTCHA Script */}
        <script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_SITE_KEY}`}
          async
          defer
        ></script>
      </head>
      <body className={`${raleway.className} ${poppins.className}`}>
        <Header />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
