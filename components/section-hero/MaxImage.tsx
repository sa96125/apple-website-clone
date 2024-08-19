import Image from "next/image";
import React from "react";

function MaxImage() {
  return (
    <div className="product-image">
      <Image
        className="mx-auto w-full z-20"
        src="/airpods/product.png"
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
