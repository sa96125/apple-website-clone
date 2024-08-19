import React from "react";
import ImageA from "./ImageA";
import ImageB from "./ImageB";
import ImageC from "./ImageC";
import DescriptionA from "./DescriptionA";
import DescriptionB from "./DescriptionB";

function ParallaxSection() {
  return (
    <section
      id="scroll-section-4"
      className="section-content flex gap-8 flex-col justify-center
                        sm:flex-row sm:max-w-[85%] mx-auto "
    >
      <div
        className="w-full max-h-[600px] overflow-hidden
                   sm:max-h-[1400px] "
      >
        <ImageA />
      </div>

      <div
        className="flex flex-col gap-8 items-center min-w-[300px] w-[80vw] mx-auto text-center
                      sm:w-[60%]
      "
      >
        <ImageB />
        <DescriptionA />
        <ImageC />
        <DescriptionB />
      </div>
    </section>
  );
}

export default ParallaxSection;
