"use client";

import Image from "next/image";
import React from "react";

function FallbackImage() {
  return (
    <Image
      className="w-full h-full object-cover"
      src="/airpods/max-crown/startframe.jpg"
      alt="AirPods Max crown"
      layout="responsive"
      width={1}
      height={1}
      priority
    />
  );
}

export default FallbackImage;
