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
  title: "DMG İNŞAAT PROJE MÜŞAVİRLİK TAAHÜT SANAYİ VE TİC.LTD.ŞTİ.",
  description:
    "DMG İnşaat 2015 yılında kurulmuş dinamik ve yenilikçi bir inşaat firmasıdır. Kuruluşumuzdan bu yana, inşaat sektöründe sağlam ve estetik yapıların hayata geçirilmesi için çalışmaktayız. Misyonumuz ve vizyonumuz; inşaat işinde uzmanlaşarak kaliteli, güvenilir ve modern projeler gerçekleştirmek, müşteri memnuniyetini en üst düzeye çıkarmaktır.Firmamız, inşaat ve dekorasyon alanlarında sunduğu geniş hizmet yelpazesi ile sektörün farklı ihtiyaçlarına cevap vermektedir. Her projemizde titizlikle çalışarak, detaylara verdiğimiz önem sayesinde fonksiyonel ve estetik mekanlar oluşturuyoruz.",
  icons: {
    icon: "/Real_mini_logo.png",
  },
  keywords: [
    "dmg",
    "dmginsaat",
    "dmgproje",
    "inşaat",
    "proje",
    "yapı",
    "mimari",
    "mimarlık",
    "dekorasyon",
    "estetik",
    "mekan",
    "yapı",
    "altyapı",
    "üstyapı",
    "TürkiyeOdalarveBorsalarBirliği",
    "AnkaraBüyükşehirBelediyesi,",
    "TOBB",
    "TOBB ETÜ",
  ],
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
