import type { Metadata } from "next";
import { Playfair_Display, Be_Vietnam_Pro } from "next/font/google";
import Providers from "./providers";
import "@/styles/globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-heading",
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WeddingCard.vn - Tạo thiệp cưới online đẹp chỉ từ 199k",
  description:
    "Tạo thiệp cưới online đẹp như 5 triệu chỉ từ 199k. Có nhạc, bản đồ, RSVP – làm trong 24h. Hơn 1000+ cặp đôi đã tin tưởng sử dụng.",
  keywords: [
    "thiệp cưới online",
    "thiệp cưới điện tử",
    "wedding invitation",
    "thiệp cưới đẹp",
    "thiệp cưới giá rẻ",
  ],
  openGraph: {
    title: "WeddingCard.vn - Tạo thiệp cưới online đẹp chỉ từ 199k",
    description:
      "Có nhạc, bản đồ, RSVP – làm trong 24h. Hơn 1000+ cặp đôi đã tin tưởng.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${playfair.variable} ${beVietnam.variable}`}>
      <body className={beVietnam.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
