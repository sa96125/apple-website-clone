import React from "react";

function AppleVideo() {
  return (
    <div className="player-container h-screen overflow-hidden">
      <video
        id="video-player"
        className="w-full"
        muted
        playsInline
        autoPlay
        preload="auto"
        loop
      >
        <source src="/airpods/ads.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default AppleVideo;
