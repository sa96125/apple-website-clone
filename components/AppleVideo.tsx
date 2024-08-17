import React from "react";

function AppleVideo() {
  return (
    <video id="video-player" muted playsInline autoPlay preload="auto" loop>
      <source src="/2/2-2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default AppleVideo;
