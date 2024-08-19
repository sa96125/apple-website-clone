"use client";

import React, { useState, useEffect } from "react";
import FallbackImage from "./FallbackImage";

function LoopVideo() {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById("loop-video");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <div id="loop-video" className="w-full h-auto">
      {isIntersecting && (
        <video
          className="w-full min-h-[320px] object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/airpods/max-crown/startframe.jpg"
        >
          <source src="/airpods/max-crown/rotation.mp4" type="video/mp4" />
          <FallbackImage />
        </video>
      )}
    </div>
  );
}

export default LoopVideo;
