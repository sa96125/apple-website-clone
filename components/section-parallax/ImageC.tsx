import Image from "next/image";
import React from "react";

function ImageC() {
  return (
    <div className="mesh-image w-full">
      <Image
        className="mx-auto w-full z-30"
        src="/airpods/max-texture/foam.jpg"
        alt="AirPods Max foam"
        layout="responsive"
        width={1}
        height={1}
        priority
      />
    </div>
  );
}

export default ImageC;
