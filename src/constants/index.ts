export interface NavItem {
  label: string;
  href: string;
}

export interface TemplateItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  priceValue: number;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface Testimonial {
  name: string;
  avatar: string;
  text: string;
  date: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Trang chủ", href: "#hero" },
  { label: "Mẫu thiệp", href: "#templates" },
  { label: "Lợi ích", href: "#benefits" },
  { label: "Cách làm", href: "#how-it-works" },
  { label: "Bảng giá", href: "#pricing" },
  { label: "Đánh giá", href: "#testimonials" },
  { label: "Liên hệ", href: "#contact" },
];

export const HERO = {
  title: "Tạo thiệp cưới online đẹp như 5 triệu chỉ từ 199k",
  subtitle: "Có nhạc, bản đồ, RSVP – làm trong 24h",
  primaryCTA: "Tạo thiệp ngay",
  secondaryCTA: "Xem mẫu thiệp",
};

export const TEMPLATES: TemplateItem[] = [
  { id: 1, title: "Hoa Mẫu Đơn", image: "/images/template-1.jpg", category: "Hoa" },
  { id: 2, title: "Mùa Thu Vàng", image: "/images/template-2.jpg", category: "Mùa" },
  { id: 3, title: "Tình Yêu Hồng", image: "/images/template-3.jpg", category: "Hoa" },
  { id: 4, title: "Minimalist", image: "/images/template-4.jpg", category: "Hiện đại" },
  { id: 5, title: "Vintage Rose", image: "/images/template-5.jpg", category: "Cổ điển" },
  { id: 6, title: "Xanh Lá Mùa Hè", image: "/images/template-6.jpg", category: "Mùa" },
  { id: 7, title: "Luxury Gold", image: "/images/template-7.jpg", category: "Sang trọng" },
  { id: 8, title: "Phong Cách Hàn", image: "/images/template-8.jpg", category: "Hiện đại" },
  { id: 9, title: "Classic Elegant", image: "/images/template-9.jpg", category: "Cổ điển" },
];

export const BENEFITS: BenefitItem[] = [
  {
    icon: "Speed",
    title: "Hoàn thành trong 24h",
    description: "Chỉ cần gửi thông tin, nhận thiệp đẹp trong vòng 24 giờ",
  },
  {
    icon: "MusicNote",
    title: "Có nhạc nền",
    description: "Thiệp kèm nhạc nền lãng mạn, tạo cảm xúc đặc biệt",
  },
  {
    icon: "Map",
    title: "Tích hợp bản đồ",
    description: "Bản đồ Google Maps dẫn đường đến địa điểm tổ chức",
  },
  {
    icon: "CheckCircle",
    title: "Xác nhận tham dự",
    description: "Tính năng RSVP giúp quản lý danh sách khách mời dễ dàng",
  },
];

export const STEPS: Step[] = [
  {
    number: 1,
    title: "Chọn mẫu",
    description: "Chọn mẫu thiệp yêu thích từ bộ sưu tập đa dạng",
    icon: "Style",
  },
  {
    number: 2,
    title: "Gửi thông tin",
    description: "Gửi thông tin đám cưới qua form đơn giản",
    icon: "Send",
  },
  {
    number: 3,
    title: "Nhận thiệp trong 24h",
    description: "Thiệp cưới online hoàn chỉnh, sẵn sàng chia sẻ",
    icon: "Celebration",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Basic",
    price: "199k",
    priceValue: 199000,
    features: [
      "1 mẫu thiệp",
      "Thông tin cơ bản",
      "Link chia sẻ",
      "Hỗ trợ 24/7",
    ],
    highlighted: false,
    cta: "Chọn gói Basic",
  },
  {
    name: "Standard",
    price: "399k",
    priceValue: 399000,
    features: [
      "3 mẫu thiệp",
      "Nhạc nền",
      "Bản đồ Google Maps",
      "RSVP",
      "Hiệu ứng đẹp",
      "Hỗ trợ ưu tiên",
    ],
    highlighted: true,
    cta: "Chọn gói Standard",
  },
  {
    name: "Premium",
    price: "999k",
    priceValue: 999000,
    features: [
      "Thiệp không giới hạn",
      "Nhạc nền tuỳ chọn",
      "Bản đồ & RSVP",
      "Video intro",
      "Album ảnh",
      "Countdown timer",
      "Tên miền riêng",
      "Hỗ trợ VIP",
    ],
    highlighted: false,
    cta: "Chọn gói Premium",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Minh Anh & Hữu Nghĩa",
    avatar: "/images/avatar-1.jpg",
    text: "Thiệp cưới online quá đẹp! Bạn bè ai cũng khen. Giá chỉ 399k mà đẹp hơn cả thiệp giấy 5 triệu.",
    date: "Tháng 12, 2025",
  },
  {
    name: "Thuỳ Linh & Đức Anh",
    avatar: "/images/avatar-2.jpg",
    text: "Rất hài lòng với dịch vụ! Làm nhanh, đẹp, có cả nhạc và bản đồ. Khách mời rất thích.",
    date: "Tháng 11, 2025",
  },
  {
    name: "Phương Thảo & Quang Huy",
    avatar: "/images/avatar-3.jpg",
    text: "Tiết kiệm được rất nhiều thời gian và chi phí. Thiệp online tiện lợi hơn hẳn thiệp giấy truyền thống.",
    date: "Tháng 10, 2025",
  },
  {
    name: "Hạ Vy & Thanh Tùng",
    avatar: "/images/avatar-4.jpg",
    text: "Đội ngũ hỗ trợ rất nhiệt tình, chỉnh sửa theo ý mình nhanh chóng. Sẽ giới thiệu cho bạn bè!",
    date: "Tháng 9, 2025",
  },
];

export const FINAL_CTA = {
  title: "Sẵn sàng tạo thiệp cưới đẹp nhất?",
  subtitle: "Hơn 1,000+ cặp đôi đã tin tưởng sử dụng dịch vụ của chúng tôi",
  cta: "Bắt đầu ngay",
};

export const CONTACT = {
  title: "Liên hệ với chúng tôi",
  subtitle: "Để lại thông tin, chúng tôi sẽ tư vấn miễn phí cho bạn",
  submitButton: "Gửi thông tin",
};

export const FOOTER = {
  brand: "WeddingCard.vn",
  description: "Nền tảng tạo thiệp cưới online hàng đầu Việt Nam",
  copyright: "© 2025 WeddingCard.vn. All rights reserved.",
  links: {
    product: [
      { label: "Mẫu thiệp", href: "#templates" },
      { label: "Bảng giá", href: "#pricing" },
      { label: "Tính năng", href: "#benefits" },
    ],
    support: [
      { label: "Hướng dẫn", href: "#how-it-works" },
      { label: "Liên hệ", href: "#contact" },
      { label: "FAQ", href: "#" },
    ],
  },
};
