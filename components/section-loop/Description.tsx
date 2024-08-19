"use client";

import React from "react";

function Description() {
  return (
    <div className="sticky-container desc-message-item-2 absolute text-center bottom-4 sm:bottom-[3em] w-full object-cover pointer-events-none">
      {/* desktop */}
      <p className="desktop-text">
        <strong>Digital Crown</strong>을 한 번 눌러 음악을 재생하거나 일시
        <br /> 정지하고, 통화 중에 자신의 소리를 음소거 및 음소거
        <br /> 해제할 수 있습니다. 그리고 두 번 눌러 음악을
        <br /> 건너뛰거나 통화를 종료할 수 있습니다.
        <br /> Digital Crown을 돌려 정밀하게 음량을
        <br /> 조절할 수도 있죠.
      </p>

      {/* mobile */}
      <p className="mobile-text">
        <strong>Digital Crown</strong>을 한 번 눌러 음악을 재생하거나
        <br /> 일시 정지하고, 통화 중에 자신의 소리를 음소거 및
        <br /> 음소거 해제할 수 있습니다. 그리고 두 번 눌러
        <br /> 음악을 건너뛰거나 통화를 종료할 수 있습니다.
        <br /> Digital Crown을 돌려 정밀하게 음량을
        <br /> 조절할 수도 있죠.
      </p>
    </div>
  );
}

export default Description;
