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
  { label: "Lời ngỏ", href: "#loi-ngo" },
  { label: "Câu chuyện", href: "#our-story" },
  { label: "Mẫu thiệp", href: "#templates" },
  { label: "Vì sao chọn", href: "#why-choose" },
  { label: "Bảng giá", href: "#pricing" },
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
    icon: "AutoAwesome",
    title: "Thiết kế tinh tế, hiện đại",
    description: "Như một website cưới thu nhỏ, được chau chuốt đến từng pixel",
  },
  {
    icon: "MusicNote",
    title: "Trải nghiệm cảm xúc",
    description: "Có nhạc nền, album ảnh, bản đồ và nhiều trải nghiệm cảm xúc",
  },
  {
    icon: "Bolt",
    title: "Thực hiện nhanh chóng",
    description: "Chỉ cần gửi thông tin, nhận thiệp đẹp trong vòng 24 giờ",
  },
  {
    icon: "Favorite",
    title: "Cá nhân hóa theo từng cặp đôi",
    description: "Không mẫu nào giống mẫu nào, thiệp là câu chuyện của riêng bạn",
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
  {
    icon: "SupportAgent",
    title: "Hỗ trợ tận tâm 24/7",
    description: "Luôn sẵn sàng tư vấn và hỗ trợ bạn bất cứ lúc nào",
  },
  {
    icon: "Verified",
    title: "Cam kết chất lượng",
    description: "Hoàn tiền 100% nếu không hài lòng, chỉnh sửa miễn phí",
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

export const LOI_NGO = {
  title: "Lời ngỏ",
  subtitle: "Gửi đến cô dâu & chú rể",
  paragraphs: [
    "Ngày cưới không chỉ là một cột mốc, mà là khoảnh khắc bắt đầu của một hành trình yêu thương trọn đời.",
    "Chúng tôi tin rằng, mỗi cặp đôi đều xứng đáng có một tấm thiệp cưới thật đặc biệt — không chỉ để thông báo, mà còn để kể câu chuyện tình yêu của chính mình.",
    "Với mong muốn lưu giữ những cảm xúc chân thật và đẹp đẽ nhất, chúng tôi tạo ra những mẫu thiệp cưới online tinh tế, hiện đại và đầy cảm xúc — để mỗi lần mở thiệp, là một lần chạm vào kỷ niệm.",
  ],
  signature: "Đội ngũ WeddingCard.vn",
};

export const OUR_STORY = {
  title: "Câu chuyện của chúng tôi",
  subtitle: "Mọi thứ bắt đầu từ một điều rất nhỏ.",
  paragraphs: [
    "Chúng tôi từng nhìn thấy những tấm thiệp cưới được gửi đi — đẹp, chỉnh chu, nhưng rồi… nhanh chóng bị lãng quên. Sau buổi tiệc, chúng nằm lại đâu đó trong một góc bàn, hoặc bị cất vào một ngăn kéo không bao giờ mở lại.",
    "Và chúng tôi tự hỏi:\n\"Tại sao một khoảnh khắc quan trọng như ngày cưới — lại được bắt đầu bằng một tấm thiệp chưa đủ để khiến người ta nhớ?\"",
    "Trong khi đó, chúng tôi đang sống trong một thế giới nơi mọi cảm xúc đều có thể được lưu giữ sống động hơn — bằng âm thanh, hình ảnh, câu chuyện.\n\nVậy tại sao thiệp cưới lại không thể trở thành một trải nghiệm?",
    "Ý tưởng về những tấm thiệp cưới online bắt đầu từ đó.\nKhông chỉ là một đường link, mà là một không gian nhỏ — nơi câu chuyện tình yêu được kể lại, nơi từng khoảnh khắc được chạm tới, và nơi mỗi người nhận thiệp có thể thật sự cảm nhận được niềm hạnh phúc của hai bạn.",
    "Hành trình này không phải lúc nào cũng dễ dàng.\nCó những đêm chúng tôi ngồi chỉnh từng chi tiết nhỏ — từ font chữ, màu sắc, đến cách một bản nhạc vang lên đúng lúc… chỉ để một tấm thiệp trở nên \"có hồn\" hơn.",
    "Nhưng có lẽ, điều khiến chúng tôi tiếp tục không phải là công nghệ, mà là cảm giác khi nhìn thấy một cặp đôi nói:\n\"Đây chính là câu chuyện của tụi mình.\"",
    "Và thế là chúng tôi tiếp tục.\n\nKhông chỉ để làm ra những tấm thiệp cưới,\nmà để tạo ra những kỷ niệm có thể được mở lại, được cảm nhận lại — ngay cả sau nhiều năm về sau.",
    "Bởi vì với chúng tôi,\nmột tấm thiệp cưới không chỉ là lời mời…\nmà là lời mở đầu cho một hành trình yêu thương.",
  ],
};

export const WHY_CHOOSE = {
  title: "Vì sao chọn chúng tôi",
  subtitle: "Chúng tôi không chỉ làm thiệp — chúng tôi giúp bạn kể câu chuyện tình yêu của mình theo cách đẹp nhất.",
  closing: "Và quan trọng nhất, chúng tôi luôn đặt cảm xúc của bạn lên hàng đầu — để tấm thiệp không chỉ đẹp, mà còn thật sự \"có hồn\".",
  items: [
    {
      icon: "AutoAwesome",
      title: "Thiết kế tinh tế, hiện đại",
      description: "Như một website cưới thu nhỏ",
    },
    {
      icon: "MusicNote",
      title: "Trải nghiệm cảm xúc",
      description: "Có nhạc nền, album ảnh, bản đồ và nhiều trải nghiệm cảm xúc",
    },
    {
      icon: "Bolt",
      title: "Thực hiện nhanh chóng",
      description: "Chỉ cần gửi thông tin, nhận thiệp đẹp trong vòng 24 giờ",
    },
    {
      icon: "Favorite",
      title: "Cá nhân hóa theo từng cặp đôi",
      description: "Không mẫu nào giống mẫu nào",
    },
  ],
};

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
