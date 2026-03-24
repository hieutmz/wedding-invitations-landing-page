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

const siteUrl = "https://weddingcard.vn";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "WeddingCard.vn – Thiệp Cưới Online Đẹp Chỉ Từ 199K | Nhạc, Bản Đồ, RSVP",
    template: "%s | WeddingCard.vn",
  },
  description:
    "Tạo thiệp cưới online đẹp như 5 triệu chỉ từ 199K. Có nhạc nền lãng mạn, bản đồ Google Maps, xác nhận tham dự RSVP – hoàn thành trong 24h. Hơn 1.000+ cặp đôi đã tin tưởng. Thử ngay!",
  keywords: [
    "thiệp cưới online",
    "thiệp cưới điện tử",
    "tạo thiệp cưới online",
    "thiệp cưới đẹp",
    "thiệp cưới giá rẻ",
    "thiệp cưới 199k",
    "thiệp cưới có nhạc",
    "thiệp cưới có bản đồ",
    "thiệp cưới RSVP",
    "thiệp cưới website",
    "mẫu thiệp cưới online",
    "thiệp cưới hiện đại",
    "thiệp cưới trang trọng",
    "wedding invitation vietnam",
    "online wedding invitation",
  ],
  authors: [{ name: "WeddingCard.vn", url: siteUrl }],
  creator: "WeddingCard.vn",
  publisher: "WeddingCard.vn",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WeddingCard.vn – Thiệp Cưới Online Đẹp Chỉ Từ 199K",
    description:
      "Có nhạc nền lãng mạn, bản đồ Google Maps, RSVP – hoàn thành trong 24h. Hơn 1.000+ cặp đôi đã tin tưởng.",
    url: siteUrl,
    siteName: "WeddingCard.vn",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WeddingCard.vn – Tạo thiệp cưới online đẹp từ 199K",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WeddingCard.vn – Thiệp Cưới Online Đẹp Chỉ Từ 199K",
    description: "Có nhạc nền, bản đồ, RSVP – hoàn thành trong 24h. Hơn 1.000+ cặp đôi đã tin tưởng.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "wedding",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "WeddingCard.vn",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.png`,
        width: 200,
        height: 60,
      },
      description: "Nền tảng tạo thiệp cưới online hàng đầu Việt Nam",
      areaServed: "VN",
      sameAs: [
        "https://facebook.com/weddingcardvn",
        "https://instagram.com/weddingcardvn",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "WeddingCard.vn",
      description: "Nền tảng tạo thiệp cưới online hàng đầu Việt Nam",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "vi-VN",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/?s={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "Thiệp cưới online WeddingCard.vn",
      description:
        "Tạo thiệp cưới online đẹp có nhạc nền lãng mạn, bản đồ Google Maps, xác nhận tham dự RSVP – hoàn thành trong 24h",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: "VN",
      serviceType: "Wedding Invitation Design",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "1000",
        bestRating: "5",
        worstRating: "1",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Bảng giá thiệp cưới online",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Gói Basic",
            price: "199000",
            priceCurrency: "VND",
            description: "1 mẫu thiệp, thông tin cơ bản, link chia sẻ, hỗ trợ 24/7",
            url: `${siteUrl}/#pricing`,
          },
          {
            "@type": "Offer",
            name: "Gói Standard",
            price: "399000",
            priceCurrency: "VND",
            description: "Nhạc nền lãng mạn, bản đồ Google Maps, RSVP, hiệu ứng đẹp, hỗ trợ ưu tiên",
            url: `${siteUrl}/#pricing`,
          },
          {
            "@type": "Offer",
            name: "Gói Premium",
            price: "999000",
            priceCurrency: "VND",
            description: "Video intro, album ảnh, countdown timer, tên miền riêng, hỗ trợ VIP",
            url: `${siteUrl}/#pricing`,
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${playfair.variable} ${beVietnam.variable}`}>
      <head>
        {/* Anti-FOUC: set dark class synchronously before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var m=localStorage.getItem('theme-mode')||'system';var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(m==='dark'||(m==='system'&&d)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})()`,
          }}
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={beVietnam.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
