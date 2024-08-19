"use client";

import React from "react";
import TypoTitle from "./TypoTitle";
import TypoDescription from "./TypoDescription";
import MaxImage from "./MaxImage";

function HeroSection() {
  return (
    <section className="section-content" id="scroll-section-0">
      {/* static */}
      <MaxImage />
      <TypoTitle />
      <TypoDescription />
    </section>
  );
}

export default HeroSection;
