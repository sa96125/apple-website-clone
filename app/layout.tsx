import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apple Website Clone",
  description: "스타법무법인 사전과제",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <main className="font-sans">{children}</main>
      </body>
    </html>
  );
}
