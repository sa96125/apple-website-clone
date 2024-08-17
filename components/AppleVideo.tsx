import React from "react";

function AppleVideo() {
  return (
    <video
      id="video-player"
      className="w-full"
      muted
      playsInline
      autoPlay
      preload="auto"
      loop
    >
      <source src="/ads.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default AppleVideo;
