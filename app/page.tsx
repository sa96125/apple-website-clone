"use client";

import React, { useState } from "react";
import Link from "next/link";
import AppleLogo from "@/components/AppleLogo";
import useBlurStore from "@/utils/store";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleBlur } = useBlurStore();

  function handleArrowButton() {
    setIsMenuOpen(!isMenuOpen);
    toggleBlur();
  }

  return (
    <>
      {/* HEADER : Global links + TODO: Menubar */}
      <header className="nav-blur nav-border">
        {/* gloval nav */}
        <nav className="global-nav">
          <div className="global-nav-links">
            <AppleLogo />
          </div>
        </nav>

        {/* local nav */}
        <nav
          className={`local-nav ${
            isMenuOpen ? "max-h-48" : "delay-200 max-h-[56px]"
          }`}
        >
          {/* (mobile) */}
          <div className="local-nav-links z-40">
            <Link className="product-name" href="/">
              AirPods Max
            </Link>
            <Link href="/">개요</Link>
            <Link href="/">제품 사양</Link>
            <Link href="/">비교하기</Link>
            <button
              className="mobile-toggle-button"
              onClick={handleArrowButton}
            >
              {isMenuOpen ? <SlArrowUp size={16} /> : <SlArrowDown size={16} />}{" "}
            </button>
            <button className="linked-button">구입하기</button>
          </div>

          {/* (mobile) */}
          <div
            className={`local-mobile-links ${
              isMenuOpen
                ? "delay-300 translate-y-0 opacity-100"
                : "-translate-y-2 opacity-0"
            }`}
          >
            <Link href="/">개요</Link>
            <Link href="/">제품 사양</Link>
            <Link href="/">비교하기</Link>
          </div>
        </nav>
      </header>

      {/* TODO: 1. 상단 구현 */}
      <section className="scroll-section" id="scroll-section1">
        <p></p>
      </section>

      {/* TODO: 2. 비디오 중간절 : 블렌딩 */}
      <section className="scroll-section" id="scroll-section2"></section>

      {/* TODO: 3. 중간 소개절 */}
      <section className="scroll-section" id="scroll-section3"></section>

      {/* TODO: 4. 스크롤 효과절 */}
      <section className="scroll-section" id="scroll-section4"></section>

      {/* TODO: 5. 상세 소개절 */}
      <section className="scroll-section" id="scroll-section5"></section>

      {/* TODO: 6. 상단 마무리 */}
      <section className="scroll-section" id="scroll-section6"></section>

      {/* TODO: 6. 상품 캐러셀 */}
      <section className="scroll-section" id="scroll-section7"></section>
    </>
  );
}

export default HomePage;
