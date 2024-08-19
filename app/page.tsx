"use client";

import React from "react";
import useScrollScene from "@/hooks/useScrollScene";
import dynamic from "next/dynamic";
import DesignSection from "@/components/DesignSection";

const GlobalNavBar = dynamic(() => import("@/components/navbar/GlobalNavBar"), {
  ssr: false,
});
const LocalNavBar = dynamic(() => import("@/components/navbar/LocalNavBar"), {
  ssr: false,
});
const HeroSection = dynamic(() => import("@/components/section-hero"), {
  ssr: false,
});
const BlendingSection = dynamic(() => import("@/components/section-blending"), {
  ssr: false,
});
const ParallaxSection = dynamic(() => import("@/components/section-parallax"));
const LoopSection = dynamic(() => import("@/components/section-loop"));
// const CanvasSection = dynamic(() => import("@/components/section-canvas"));
// const CarouselSection = dynamic(() => import("@/components/section-carousel"));

function HomePage() {
  const { container } = useScrollScene();

  return (
    <div ref={container}>
      {/* 네비게이션 */}
      <header>
        <GlobalNavBar />
        <LocalNavBar />
      </header>

      {/* 상단 */}
      <HeroSection />
      {/* 비디오 중간절 */}
      <BlendingSection />
      {/* 중간 소개절 */}
      <DesignSection />
      {/* 상세 소개절 */}
      <ParallaxSection />
      {/* 상단 마무리 */}
      <LoopSection />

      {/* 스크롤 효과절(미구현) */}
      {/* <CanvasSection /> */}
      {/* 상품 캐러셀(미구현) */}
      {/* <CarouselSection /> */}
    </div>
  );
}

export default HomePage;
