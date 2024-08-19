import Image from "next/image";
import React from "react";

function ImageB() {
  return (
    <div className="mesh-image w-full">
      <Image
        className="mx-auto w-full z-30"
        src="/airpods/max-texture/mesh.jpg"
        alt="AirPods Max mesh"
        layout="responsive"
        width={1}
        height={1}
        priority
      />
    </div>
  );
}

export default ImageB;
