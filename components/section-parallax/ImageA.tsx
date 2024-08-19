import { useEffect, useRef } from "react";
import Image from "next/image";

const ImageA = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number>(0);
  const previousScrollY = useRef<number>(0);
  const currentParallax = useRef<number>(0);

  const lerp = (start: number, end: number, factor: number) => {
    return start * (1 - factor) + end * factor;
  };

  useEffect(() => {
    const handleScroll = () => {
      previousScrollY.current = window.scrollY;
    };

    const updateParallax = () => {
      if (containerRef.current) {
        const offset = containerRef.current.offsetTop;
        const targetParallax = (previousScrollY.current - offset) * 0.1;

        // Smooth transition with lerp
        currentParallax.current = lerp(
          currentParallax.current,
          targetParallax,
          0.1
        );

        containerRef.current.style.transform = `translateY(${currentParallax.current}px)`;

        // Continue the animation
        requestRef.current = requestAnimationFrame(updateParallax);
      }
    };

    window.addEventListener("scroll", handleScroll);
    requestRef.current = requestAnimationFrame(updateParallax);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[100vh] md:h-full relative">
      <div className="relative w-full h-full">
        <Image
          className="object-cover"
          src="/airpods/max-texture/comfort.jpg"
          alt="AirPods Max comfort"
          layout="responsive"
          width={1}
          height={1}
          priority
        />
      </div>
    </div>
  );
};

export default ImageA;
