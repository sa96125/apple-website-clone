import React from "react";

function InteractionE() {
  return (
    <section className="section-content" id="scroll-section-4">
      <div className="sticky-container desc-message">
        {/* desktop */}
        <p className="desktop-text">
          <strong>특수 제작된 메시 직물</strong>이 이어 쿠션을 감싸고 있어, 음악
          청취 시
          <br /> 부드러운 베개 같은 포근함을 느낄 수 있습니다.
        </p>

        {/* mobile */}
        <p className="mobile-text">
          <strong>특수 제작된 메시 직물</strong>이 이어 쿠션을 감싸고 있어,
          <br /> 음악 청취 시 부드러운 베개 같은 포근함을 느낄 수
          <br /> 있습니다.
        </p>
      </div>

      <div className="sticky-container desc-message">
        {/* desktop */}
        <p className="desktop-text">
          음향학적 공법으로 설계된 메모리 폼 소재의 <strong>이어 쿠션</strong>
          이 몰입감
          <br /> 만점의 차폐 공간을 생성하고 이를 통해 놀라운 사운드를
          <br /> 경험하게 해줍니다.
        </p>

        {/* mobile */}
        <p className="mobile-text">
          음향학적 공법으로 설계된 메모리 폼 소재의{" "}
          <strong>
            이어
            <br /> 쿠션
          </strong>
          이 몰입감 만점의 차폐 공간을 생성하고 이를
          <br /> 통해 놀라운 사운드를 경험하게 해줍니다.
        </p>
      </div>
    </section>
  );
}

export default InteractionE;
