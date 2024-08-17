"use client";

import React, { useState } from "react";
import Link from "next/link";
import AppleLogo from "@/components/AppleLogo";
import useBlurStore from "@/utils/store";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isBlurred, toggleBlur, disableBlur } = useBlurStore();

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

      {/* <main className=" top">
        <section className=" relative h-screen flex mobile:mx-[47px] flex-col justify-center items-center">
          <picture className="pt-[110px] pb-[57px]">
            <source srcSet="/1/1-1.png" type="image/webp" />
            <img
              src="/1/1-1.png"
              alt="이어컵 색상과 어울리는 그레이 색상 메시 직물 쿠션이 달린 실버 색상 이어컵 두 개가 화이트 색상 실리콘 헤드밴드로 연결되어 있고, 상부의 메시 소재가 보이는 실버 색상 AirPods Max를 앞에서 바라본 모습. "
              className="object-cover animate-zoomIn w-[340px] lg:w-[80vh] md:top-[50%] z-30"
            />
          </picture>
          <img
            src="/1/1-2.jpg"
            alt="이어컵 색상과 어울리는 그레이 색상 메시 직물 쿠션이 달린 실버 색상 이어컵 두 개가 화이트 색상 실리콘 헤드밴드로 연결되어 있고, 상부의 메시 소재가 보이는 실버 색상 AirPods Max를 앞에서 바라본 모습. "
            className=" m-auto w-[288px] opacity-0 md:absolute md:top-[50%] -z-20 md:w-[90vw] animate-fadeInDelayed"
          />
          <p className="mt-[24px] mb-[95px] sm:text-[1.25rem] mx-auto text-center leading-7 font-bold text-[21px] ">
            새롭게 선보이는 AirPods Max. <br />
            감동적인 하이파이 오디오와 AirPods <br />
            특유의 매혹적인 사용성의 완벽한 조합. <br />
            궁극의 개인 청음 기기를 드디어 <br />
            만날 수 있습니다.
          </p>
        </section> */}

      {/* Video effect, 비디오 중간 절 */}
      {/* <section className="">
          <video
            id="video-player"
            muted
            playsInline
            autoPlay
            preload="auto"
            loop
          >
            <source src="/2/2-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <ul>
            <li>하이파이 오디오.</li>
            <li>액티브 노이즈 캔슬링과 주변음 허용 모드.</li>
            <li>
              극장에 온 듯 온몸을 감싸는 <br /> 개인 맞춤형 공간 음향.
            </li>
            <li>매끈한 디자인. 뛰어난 착용감.</li>
          </ul>
        </section> */}

      {/* Brief info, 중간 소개 절 */}
      {/* Scroll effect, 스크롤 효과 절 */}
      {/* Detail info, 상세 소개 절 */}
      {/* Gif effect, 상단 마무리 */}
      {/* 캐러셀 & 그리드, 상품 캐러셀 */}
      {/* </main> */}
    </>
  );
}

export default HomePage;
