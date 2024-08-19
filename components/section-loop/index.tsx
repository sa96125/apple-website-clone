"use client";

import React from "react";
import LoopVideo from "./LoopVideo";
import BodyImage from "./BodyImage";
import Description from "./Description";

function LoopSection() {
  return (
    <section className="section-content relative" id="scroll-section-5">
      <div className="mesh-image relative min-h-[320px] w-auto h-auto mx-auto">
        <LoopVideo />
        <BodyImage />
        <Description />
      </div>
    </section>
  );
}

export default LoopSection;
