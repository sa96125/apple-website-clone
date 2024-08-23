"use client";

import React from "react";
import MaxImage from "./MaxImage";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";

function HeroSection() {
  return (
    <section id="scroll-section-0" className="section-gap mobile-layout" >
      <MaxImage />
      <HeroTitle />
      <HeroDescription />
    </section>
  );
}

export default HeroSection;
