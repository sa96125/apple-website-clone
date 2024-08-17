"use client";

import React from "react";
import Link from "next/link";
import useBlurStore from "@/utils/store";

import AppleLogo from "@/components/AppleLogo";
import AppleVideo from "@/components/AppleVideo";
import ToggleIcon from "@/components/ToggleIcon";

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
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
          {/* (desktop) */}
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
              <ToggleIcon isMenuOpen={isMenuOpen} />
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
        <p>
          새롭게 선보이는 AirPods Max. 감동적인 하이파이 오디오와 AirPods 특유의
          매혹적인 사용성의 완벽한 조합. 궁극의 개인 청음 기기를 드디어 만날 수
          있습니다.
        </p>
      </section>

      {/* TODO: 2. 비디오 중간절 : 블렌딩 */}
      <section className="scroll-section" id="scroll-section2">
        <AppleVideo />
        <p>하이파이 오디오.</p>
        <p>액티브 노이즈 캔슬링과 주변음 허용모드.</p>
        <p>극장에 온 듯 온몸을 감싸는 개인 맞춤형 공간 음향.</p>
        <p>매끈한 디자인. 뛰어난 착용감.</p>
      </section>

      {/* TODO: 3. 중간 소개절 */}
      <section className="scroll-section" id="scroll-section3">
        <p>디자인</p>
        <p>과감하리만치 독창적인 구조.</p>
        <p>
          오버이어 헤드폰의 개념을 완전히 재구상했습니다. 그 결과 이어 쿠션부터
          캐노피에 이르기까지 AirPods Max는 다양한 머리 모양에 맞는 최적의
          어쿠스틱 차폐 공간을 생성하는 완벽한 핏으로 설계되어, 사운드
          하나하나의 디테일에 온전히 몰입할 수 있게 해줍니다.
        </p>
      </section>

      {/* TODO: 4. 스크롤 효과절 */}
      <section className="scroll-section" id="scroll-section4">
        <p>
          헤드밴드의 중심부를 이루는 캐노피는 통기성이 뛰어난 니트 메시 소재로
          만들어져 본체의 무게를 분산시켜 착용자의 머리에 가해지는 압력을
          감소시켜줍니다.
        </p>
        <p>
          스테인리스 스틸 프레임을 부드러운 터치감의 소재로 감싸 내구성, 유연성
          그리고 편안한 착용감까지 놀라운 수준으로 실현해냈습니다.
        </p>
        <p>
          텔레스코핑 암은 부드럽게 길이가 조절되면서도 견고하게 고정되기 때문에
          안정적인 착용감과 차폐성을 선사합니다.
        </p>
        <p>
          아름다운 산화 피막 알루미늄 이어컵에는 혁신적으로 설계된 메커니즘이
          적용되어 있어 각각의 이어컵이 독립적으로 회전하여, 귀에 가해지는
          압력을 균일하게 맞춰줍니다.
        </p>
      </section>

      {/* TODO: 5. 상세 소개절 */}
      <section className="scroll-section" id="scroll-section5">
        <p>
          특수 제작된 메시 직물이 이어 쿠션을 감싸고 있어, 음악 청취 시 부드러운
          베개 같은 포근함을 느낄 수 있습니다.
        </p>
        <p>
          음향학적 공법으로 설계된 메모리 폼 소재의 이어 쿠션이 몰입감 만점의
          차폐 공간을 생성하고 이를 통해 놀라운 사운드를 경험하게 해줍니다.
        </p>
      </section>

      {/* TODO: 6. 상단 마무리 */}
      <section className="scroll-section" id="scroll-section6">
        <p>
          Digital Crown을 한 번 눌러 음악을 재생하거나 일시 정지하고, 통화 중에
          자신의 소리를 음소거 및 음소거 해제할 수 있습니다. 그리고 두 번 눌러
          음악을 건너뛰거나 통화를 종료할 수 있습니다. Digital Crown을 돌려
          정밀하게 음량을 조절할 수도 있죠.
        </p>
      </section>

      {/* TODO: 6. 상품 캐러셀 */}
      <section className="scroll-section" id="scroll-section7">
        <p>5가지 색상. 단조로움을 거부한다.</p>
      </section>
    </>
  );
}

export default HomePage;
