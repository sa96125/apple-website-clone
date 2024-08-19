import React from "react";

function MessageB() {
  return (
    <div className="sticky-wrapper message-item b">
      {/* desktop */}
      <p className="desktop-text">
        액티브 노이즈 캔슬링과
        <br /> 주변음 허용 모드.
      </p>

      {/* mobile */}
      <p className="mobile-text">
        액티브 노이즈
        <br /> 캔슬링과 주변음 허용
        <br /> 모드.
      </p>
    </div>
  );
}

export default MessageB;
