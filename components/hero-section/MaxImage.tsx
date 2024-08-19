import Image from "next/image";
import React from "react";

function MaxImage() {
  return (
    <div className="product-image">
      <Image
        className="mx-auto w-full z-30"
        src="/product.png"
        alt="AirPods Max Silver"
        layout="responsive"
        width={0}
        height={0}
        priority
      />
    </div>
  );
}

export default MaxImage;
