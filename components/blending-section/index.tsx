"use client";

import React from "react";
import AppleVideo from "../hero-section/AppleVideo";
import MessageA from "./MessageA";
import MessageB from "./MessageB";
import MessageC from "./MessageC";
import MessageD from "./MessageD";


function BlendingSection() {
  return (
    <section className="section-content" id="scroll-section-1">
      <AppleVideo />
      {/* sticky */}
      <MessageA />
      <MessageB />
      <MessageC />
      <MessageD />
    </section>
  );
}

export default BlendingSection;
