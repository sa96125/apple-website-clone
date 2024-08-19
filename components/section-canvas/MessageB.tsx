import React from "react";

function MessageB() {
  return (
    <div className="sticky-wrapper desc-message-item b">
      {/* desktop */}
      <p className="desktop-text">
        <strong>스테인리스 스틸 프레임</strong>을 부드러운
        <br /> 터치감의 소재로 감싸 내구성,
        <br /> 유연성 그리고 편안한 착용감까지
        <br /> 놀라운 수준으로 실현해냈습니다.
      </p>

      {/* mobile */}
      <p className="mobile-text">
        <strong>스테인리스 스틸 프레임</strong>을 부드러운 터치감의
        <br /> 소재로 감싸 내구성, 유연성 그리고 편안한
        <br /> 착용감까지 놀라운 수준으로 실현해냈습니다.
      </p>
    </div>
  );
}

export default MessageB;
