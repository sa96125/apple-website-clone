import React from "react";

function MessageC() {
  return (
    <div className="sticky-wrapper message-item c">
      {/* desktop */}
      <p className="desktop-text">
        극장에 온 듯 온몸을 감싸는
        <br /> 개인 맞춤형 공간 음향.
      </p>

      {/* mobile */}
      <p className="mobile-text">
        극장에 온 듯 온몸을
        <br /> 감싸는 개인 맞춤형
        <br /> 공간 음향.
      </p>
    </div>
  );
}

export default MessageC;
