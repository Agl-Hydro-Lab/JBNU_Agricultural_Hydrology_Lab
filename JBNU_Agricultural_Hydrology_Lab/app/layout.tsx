import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "농업수문학연구실 | 전북대학교",
  description:
    "전북대학교 농업수문학연구실은 기후변화, AI, 원격탐사 및 수문모델링을 활용해 지속가능한 유역관리 방안을 연구합니다.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
