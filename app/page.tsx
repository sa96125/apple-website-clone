"use client";

import React from "react";
import useScrollScene from "@/hooks/useScrollScene";

import GlobalNavBar from "@/components/navbar/GlobalNavBar";
import LocalNavBar from "@/components/navbar/LocalNavBar";
import HeroSection from "@/components/section-hero";
import BlendingSection from "@/components/section-blending";
import DesignSection from "@/components/DesignSection";
// import CanvasSection from "@/components/section-canvas";
import ParallaxSection from "@/components/section-parallax";
import LoopSection from "@/components/section-loop";
// import CarouselSection from "@/components/section-carousel";

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

      {/* 스크롤 효과절(진행중) */}
      {/* <CanvasSection /> */}
      {/* 상품 캐러셀(진행중) */}
      {/* <CarouselSection /> */}
    </div>
  );
}

export default HomePage;
