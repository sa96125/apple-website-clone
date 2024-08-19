import React, { useEffect, useRef, useState } from 'react';

// Define the number of images
const imageCount = 41; // Number of images (from 0000 to 0040)

function MaxCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Function to load images
    const loadImages = async () => {
      const imageUrls: string[] = [];
      for (let i = 0; i < imageCount; i++) {
        const url = `path/to/images/small_2x_${String(i).padStart(4, '0')}.jpg`; // Update path and extension as needed
        imageUrls.push(url);
      }

      const loadedImages: HTMLImageElement[] = await Promise.all(
        imageUrls.map((src) =>
          new Promise<HTMLImageElement>((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(img);
          })
        )
      );

      setImages(loadedImages);
    };

    loadImages();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!canvas || !context || images.length === 0) return;

    const drawImage = () => {
      if (context && images.length > 0) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        const img = images[currentIndex];
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    };

    const animate = () => {
      drawImage();
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Adjust canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Start animation loop
    const interval = setInterval(animate, 100); // Change interval as needed

    // Handle window resize
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawImage();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [images, currentIndex]);

  return (
    <div className="canvas-container h-screen  overflow-hidden">
      <canvas className="image-canvas" ref={canvasRef}></canvas>
    </div>
  );
}

export default MaxCanvas;
