import React from "react";

function MessageA() {
  return (
    <div className="sticky-wrapper desc-message-item a opacity-0">
      {/* desktop */}
      <p className="desktop-text">
        헤드밴드의 중심부를 이루는
        <br /> <strong>캐노피</strong>는 통기성이 뛰어난 니트 메시
        <br /> 소재로 만들어져 본체의 무게를
        <br /> 분산시켜 착용자의 머리에 가해지는
        <br /> 압력을 감소시켜줍니다.
      </p>

      {/* mobile */}
      <p className="mobile-text">
        헤드밴드의 중심부를 이루는 <strong>캐노피</strong>는 통기성이
        <br /> 뛰어난 니트 메시 소재로 만들어져 본체의 무게를
        <br /> 분산시켜 착용자의 머리에 가해지는 압력을
        <br /> 감소시켜줍니다.
      </p>
    </div>
  );
}

export default MessageA;
