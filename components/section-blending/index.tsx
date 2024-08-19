"use client";

import React from "react";
import MaxVideo from "./MaxVideo";
import MessageA from "./MessageA";
import MessageB from "./MessageB";
import MessageC from "./MessageC";
import MessageD from "./MessageD";

function BlendingSection() {
  return (
    <section className="section-content" id="scroll-section-1">
      <MaxVideo />
      {/* sticky */}
      <MessageA />
      <MessageB />
      <MessageC />
      <MessageD />
    </section>
  );
}

export default BlendingSection;
