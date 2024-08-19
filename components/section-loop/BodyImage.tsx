"use client";

import React from "react";
import Image from "next/image";

function BodyImage() {
  return (
    <Image
      src="/airpods/max-crown/body.png"
      alt="crown body"
      layout="fill"
      className="absolute top-0 left-0 min-h-[320px] object-cover pointer-events-none"
    />
  );
}

export default BodyImage;
