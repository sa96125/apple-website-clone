import React from "react";
import Image from "next/image";

function AppleLogo() {
  return (
    <Image
      src="/1/apple.png"
      alt="apple logo"
      priority
      width={"18"}
      height={"18"}
      className="object-cover w-[18px]"
    />
  );
}

export default AppleLogo;
