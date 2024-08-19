"use client";

import React from "react";
import useScrollScene from "@/hooks/useScrollScene";

import GlobalNavBar from "@/components/navbar/GlobalNavBar";
import LocalNavBar from "@/components/navbar/LocalNavBar";

import HeroSection from "@/components/hero-section";
import BlendingSection from "@/components/blending-section";
import InteractionC from "@/components/InteractionC";
import InteractionD from "@/components/InteractionD";
import InteractionE from "@/components/InteractionE";
import InteractionF from "@/components/InteractionF";
import InteractionG from "@/components/InteractionG";


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

      {/* ... */}
      <InteractionC />
      <InteractionD />
      <InteractionE />
      <InteractionF />
      <InteractionG />
    </div>
  );
}

export default HomePage;
