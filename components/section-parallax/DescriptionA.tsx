import React from "react";

function DescriptionA() {
  return (
    <div className="sticky-container mb-[3em] desc-message-item">
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
  );
}

export default DescriptionA;
