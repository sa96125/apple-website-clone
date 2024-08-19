"use client";

import useBlurStore from "@/utils/store";
import React, { useEffect } from "react";

interface BlurAreaProps {
  onClickOutside: () => void;
}

const BlurArea: React.FC = () => {
  const { isBlurred, enableBlur, disableBlur } = useBlurStore();

  useEffect(() => {
    if (isBlurred) {
      enableBlur();
    } else {
      const timeoutId = setTimeout(() => {
        disableBlur();
      }, 300); // 애니메이션 시간과 일치시킵니다.

      return () => clearTimeout(timeoutId);
    }
  }, [isBlurred]);

  function onClickOutside() {
    disableBlur();
  }

  return (
    <div
      className={`fixed inset-0 w-full z-40 bg-zinc-100/30 backdrop-blur-lg transition-opacity duration-500 ${
        isBlurred ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClickOutside}
    />
  );
};

export default BlurArea;
