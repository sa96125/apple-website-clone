import React from "react";

function MessageC() {
  return (
    <div className="sticky-wrapper desc-message-item c">
      {/* desktop */}
      <p className="desktop-text">
        <strong>텔레스코핑 암</strong>은 부드럽게 길이가
        <br /> 조절되면서도 견고하게 고정되기 때문에
        <br /> 안정적인 착용감과 차폐성을
        <br /> 선사합니다.
      </p>

      {/* mobile */}
      <p className="mobile-text">
        <strong>텔레스코핑 암</strong>은 부드럽게 길이가 조절되면서도
        <br /> 견고하게 고정되기 때문에 안정적인 착용감과
        <br /> 차폐성을 선사합니다.
      </p>
    </div>
  );
}

export default MessageC;
