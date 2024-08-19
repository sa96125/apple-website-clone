"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const imageCount = 41; // Number of images from 0000 to 0040

function FallbackImage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Load images into an array
    const loadImages = () => {
      const imageUrls: string[] = [];
      for (let i = 0; i < imageCount; i++) {
        const url = `/airpods/max-snapshots/small_2x_${String(i).padStart(4, '0')}.jpg`;
        imageUrls.push(url);
      }
      setImages(imageUrls);
    };

    loadImages();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const sectionHeight = window.innerHeight; // Adjust this if your section height is different
      const index = Math.min(
        Math.floor((scrollTop / sectionHeight) * imageCount),
        imageCount - 1
      );
      setCurrentIndex(index);
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [images.length]);

  return (
    <div className="product-image sticky top-0" ref={containerRef}>
      {images.length > 0 && (
        <Image
          className="mx-auto w-full z-20"
          src={images[currentIndex]}
          alt="AirPods Max Black"
          layout="responsive"
          width={500}
          height={500}
          priority
        />
      )}
    </div>
  );
}

export default FallbackImage;
