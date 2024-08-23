import React from "react";

function HeroDescription() {
  return (
    <div className=" text-center font-bold text-xl pt-[2em] pb-[5em] desktop:text-[1.9rem] desktop:leading-relaxed"> 
      {/* desktop */}
      <p className="desktop-text">
        새롭게 선보이는 AirPods Max. 감동적인 하이파이 오디오와 AirPods
        <br /> 특유의 매혹적인 사용성의 완벽한 조합. 궁극의 개인 청음 기기를 드디어
        <br /> 만날 수 있습니다.
      </p>

      {/* mobile */}
      <p className="mobile-text">
        새롭게 선보이는 AirPods Max.
        <br /> 감동적인 하이파이 오디오와 AirPods
        <br /> 특유의 매혹적인 사용성의 완벽한 조합.
        <br /> 궁극의 개인 청음 기기를 드디어
        <br /> 만날 수 있습니다.
      </p>
    </div>
  );
}

export default HeroDescription;
