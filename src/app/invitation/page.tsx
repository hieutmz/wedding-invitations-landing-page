import { Suspense } from "react";
import type { Metadata } from "next";
import InvitationPage from "@/components/pages/invitation/InvitationPage";

export const metadata: Metadata = {
  title: "Hiếu & Hiền Wedding | 15.06.2026",
  description:
    "Trân trọng kính mời bạn đến dự lễ cưới của Trần Minh Hiếu và Nguyễn Thùy Hiền vào ngày 15 tháng 6 năm 2026.",
  openGraph: {
    title: "Hiếu & Hiền Wedding | 15.06.2026",
    description: "Bạn được mời đến dự lễ cưới của Hiếu & Hiền. Hãy mở thiệp để xem chi tiết!",
    type: "website",
  },
};

function LoadingFallback() {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ background: "linear-gradient(135deg, #fdfbf7, #f5ede0)" }}
    >
      <div className="text-center">
        <div
          className="font-script text-3xl"
          style={{ color: "#c9a96e", fontFamily: "var(--font-script), cursive" }}
        >
          H & H
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <InvitationPage />
    </Suspense>
  );
}
