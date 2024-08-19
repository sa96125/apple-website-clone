import React from "react";

function DescriptionB() {
  return (
    <div className="sticky-container mb-[3em] desc-message-item">
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
  );
}

export default DescriptionB;
