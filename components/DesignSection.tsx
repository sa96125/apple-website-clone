import React from "react";

function DesignSection() {
  return (
    <section className="section-content" id="scroll-section-2">
      <div className="typo-wrapper">
        <small>디자인</small>
        <h2>
          과감하리만치
          <br /> 독창적인 구조.
        </h2>

        {/* desktop */}
        <p className="desktop-text">
          오버이어 헤드폰의 개념을 완전히 재구상했습니다.
          <br /> 그 결과 이어 쿠션부터 캐노피에 이르기까지
          <br /> AirPods Max는 다양한 머리 모양에 맞는 최적의
          <br /> 어쿠스틱 차폐 공간을 생성하는 완벽한 핏으로
          <br /> 설계되어, 사운드 하나하나의 디테일에 온전히
          <br /> 몰입할 수 있게 해줍니다.
        </p>

        {/* mobile */}
        <p className="mobile-text">
          오버이어 헤드폰의 개념을 완전히
          <br /> 재구상했습니다. 그 결과 이어 쿠션부터
          <br /> 캐노피에 이르기까지 AirPods Max는
          <br /> 다양한 머리 모양에 맞는 최적의 어쿠스틱
          <br /> 차폐 공간을 생성하는 완벽한 핏으로
          <br /> 설계되어, 사운드 하나하나의 디테일에 온전히
          <br /> 몰입할 수 있게 해줍니다.
        </p>
      </div>
    </section>
  );
}

export default DesignSection;
