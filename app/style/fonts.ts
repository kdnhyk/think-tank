import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});
const hiragino_sans = localFont({
  src: [
    {
      path: "../../public/font/HiraginoKakuGothicProW3.otf",
    },
  ],
  display: "swap",
  weight: "300",
  variable: "--hiragino_sans",
});

export { inter, hiragino_sans };
