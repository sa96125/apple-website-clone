import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function HeroTitle() {

  useGSAP(() => {
    gsap.to('#airpods-max-name', {
      opacity: 1,
      delay: .8
    })
  }, [])

  return (
    <div id="airpods-max-name" className="opacity-0 w-full text-center desktop:absolute top-[16em] -z-10">
      <h1 className="font-semibold text-[3rem] desktop:text-[16vw]">AirPods Max</h1>
    </div>
  );
}

export default HeroTitle;
