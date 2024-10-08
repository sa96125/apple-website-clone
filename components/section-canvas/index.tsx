"use client";

import React from "react";
// import MaxCanvas from "./MaxCanvas";
import FallbackImage from "./FallbackImage";
import MessageA from "./MessageA";
import MessageB from "./MessageB";
import MessageC from "./MessageC";
import MessageD from "./MessageD";

function CanvasSection() {
  return (
    <section className="section-content" id="scroll-section-3">
      <FallbackImage />
      {/* <MaxCanvas /> */}
      {/* sticky */}
      <MessageA />
      <MessageB />
      <MessageC />
      <MessageD />
    </section>
  );
}

export default CanvasSection;
