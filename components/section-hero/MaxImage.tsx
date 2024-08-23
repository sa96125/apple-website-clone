import { airpodsMaxSilverSrc } from "@/utils/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";


function MaxImage() {

  useGSAP(() => {
    gsap.from('#airpods-max-image', {
      scale:2,
      duration:'1'
    })

    gsap.to('#airpods-max-image', {
      opacity: 1,
      ease: 'bounce.out',
      duration:'1'
    })
  }, [])

  return (
    <div id='airpods-max-image' 
         className="pt-[10em] pb-[3em] mx-auto opacity-0 max-w-[340px] desktop:max-w-[40%] desktop:pt-[7em]">
      <Image
        className="mx-auto w-full z-20"
        src={airpodsMaxSilverSrc}
        alt="AirPods Max Silver"
        layout="responsive"
        width={500}
        height={500}
        priority
      />
    </div>
  );
}

export default MaxImage;
