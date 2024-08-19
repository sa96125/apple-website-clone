import { useEffect, useRef, useCallback } from "react";
import { Scene } from "@/utils/types";

let scrollY = 0;
let currentScene = 0;
let prevScrollHeight = 0;
let enterNewScene = false;
let scenes: Scene[] = [];

const useScrollScene = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scenes = [
      {
        type: "normal",
        heightNum: 4,
        scrollHeight: 0,
        objs: {
          container: document.querySelector("#scroll-section-0") as HTMLElement,
        },
      },
      {
        type: "sticky",
        heightNum: 4,
        scrollHeight: 0,
        objs: {
          container: document.querySelector("#scroll-section-1"),
          messageA: document.querySelector("#scroll-section-1 .message-item.a") as HTMLElement,
          messageB: document.querySelector("#scroll-section-1 .message-item.b") as HTMLElement,
          messageC: document.querySelector("#scroll-section-1 .message-item.c") as HTMLElement,
          messageD: document.querySelector("#scroll-section-1 .message-item.d") as HTMLElement,
        },
        values: {
          messageA_opacity_in: [0, 1, { start: 0.05, end: 0.15 }],
          messageB_opacity_in: [0, 1, { start: 0.20, end: 0.30 }],
          messageC_opacity_in: [0, 1, { start: 0.35, end: 0.45 }],
          messageD_opacity_in: [0, 1, { start: 0.50, end: 0.60 }],
          
          messageA_translateY_in: [100, 0, { start: 0.05, end: 0.20 }],
          messageB_translateY_in: [100, 0, { start: 0.20, end: 0.35 }],
          messageC_translateY_in: [100, 0, { start: 0.35, end: 0.50 }],
          messageD_translateY_in: [100, 0, { start: 0.50, end: 0.65 }],
          
          messageA_opacity_out: [1, 0, { start: 0.25, end: 0.30 }],
          messageB_opacity_out: [1, 0, { start: 0.40, end: 0.45 }],
          messageC_opacity_out: [1, 0, { start: 0.55, end: 0.60 }],
          messageD_opacity_out: [1, 0, { start: 0.75, end: 0.80 }],
          
          messageA_translateY_out: [0, -100, { start: 0.30, end: 0.35 }],
          messageB_translateY_out: [0, -100, { start: 0.45, end: 0.50 }],
          messageC_translateY_out: [0, -100, { start: 0.60, end: 0.65 }],
          messageD_translateY_out: [0, -100, { start: 0.75, end: 0.90 }],
          
        },
      },
      {
        type: "sticky",
        heightNum: 4,
        scrollHeight: 0,
        objs: {
          container: document.querySelector("#scroll-section-2") as HTMLElement,
          messageA: document.querySelector(
            "#scroll-section-2 .desc-message.a"
          ) as HTMLElement,
          messageB: document.querySelector(
            "#scroll-section-2 .desc-message.b"
          ) as HTMLElement,
          messageC: document.querySelector(
            "#scroll-section-2 .desc-message.c"
          ) as HTMLElement,
          messageD: document.querySelector(
            "#scroll-section-2 .desc-message.d"
          ) as HTMLElement,
        },
        values: {
          messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
          messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
          messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
          messageD_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
          messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
          messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
          messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
          messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
          messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
          messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
          messageC_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
          messageD_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
          messageA_translateY_out: [0, -10, { start: 0.25, end: 0.3 }],
          messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
          messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
          messageD_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
        },
      },
      {
        type: "normal",
        heightNum: 5,
        scrollHeight: 0,
        objs: {
          container: document.querySelector("#scroll-section-3"),
        },
      },
      {
        type: "normal",
        heightNum: 2,
        scrollHeight: 0,
        objs: {
          container: document.querySelector("#scroll-section-4"),
        },
      },
      {
        type: "normal",
        heightNum: 2,
        scrollHeight: 0,
        objs: {
          container: document.querySelector("#scroll-section-5"),
        },
      },
      {
        type: "normal",
        heightNum: 2,
        scrollHeight: 0,
        objs: {
          container: document.querySelector("#scroll-section-6"),
        },
      },
    ];

    setLayout();

    window.addEventListener("load", setLayout);
    window.addEventListener("resize", setLayout);
    window.addEventListener("scroll", scrollLoop);

    return () => {
      window.removeEventListener("load", setLayout);
      window.removeEventListener("resize", setLayout);
      window.removeEventListener("scroll", scrollLoop);
    };
  }, []);

  const setLayout = useCallback(() => {
    // 스크롤 높이 셋팅
    scenes.forEach((scene, index) => {
      if (scene.type === "sticky") {
        scene.scrollHeight = scene.heightNum * window.innerHeight;
      } else if (scene.type === "normal") {
        scene.scrollHeight = scene.objs.container?.scrollHeight as number;
      }
      if (scene.objs.container) {
        scene.objs.container.style.height = `${scene.scrollHeight}px`;
      }
    });

    // 새로고침 -> 현재 씬 확인
    let totalScrollHeight = 0;
    for (let i = 0; i < scenes.length; i++) {
      totalScrollHeight += scenes[i].scrollHeight;
      if (totalScrollHeight >= scrollY) {
        currentScene = i;
        break;
      }
    }
  }, []);

  const scrollLoop = useCallback(() => {
    scrollY = window.scrollY;
    enterNewScene = false;
    prevScrollHeight = 0;

    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += scenes[i].scrollHeight;
    }

    if (scrollY > prevScrollHeight + scenes[currentScene].scrollHeight) {
      enterNewScene = true;
      currentScene++;
      container.current?.setAttribute("id", `show-scene-${currentScene}`);
    }

    if (scrollY < prevScrollHeight) {
      enterNewScene = true;
      if (currentScene === 0) return;
      currentScene--;
      container.current?.setAttribute("id", `show-scene-${currentScene}`);
    }

    if (enterNewScene) return;
    playAnimation();
  }, []);

  const playAnimation = useCallback(() => {
    const objs = scenes[currentScene].objs;
    const values = scenes[currentScene].values;
    const currentScrollY = scrollY - prevScrollHeight;
    const scrollHeight = scenes[currentScene].scrollHeight;
    const scrollRatio = currentScrollY / scrollHeight;

    switch (currentScene) {
      case 0:
        break;
      case 1:
          if (objs.messageA) {
          if (scrollRatio <= 0.22) {
            objs.messageA.style.opacity = calcValues(values?.messageA_opacity_in,currentScrollY);
            objs.messageA.style.transform = `translate3d(0, ${calcValues(values?.messageA_translateY_in,currentScrollY)}%, 0)`;
          } else {
            objs.messageA.style.opacity = calcValues(values?.messageA_opacity_out,currentScrollY);
            objs.messageA.style.transform = `translate3d(0, ${calcValues(values?.messageA_translateY_out,currentScrollY)}%, 0)`;
          }
        }

        if (objs.messageB) {
          if (scrollRatio <= 0.32) {
            objs.messageB.style.opacity = calcValues(values?.messageB_opacity_in,currentScrollY);
            objs.messageB.style.transform = `translate3d(0, ${calcValues(values?.messageB_translateY_in,currentScrollY)}%, 0)`;
          } else {
            objs.messageB.style.opacity = calcValues(values?.messageB_opacity_out,currentScrollY);
            objs.messageB.style.transform = `translate3d(0, ${calcValues(values?.messageB_translateY_out,currentScrollY)}%, 0)`;
          }
        }

        if (objs.messageC) {
          if (scrollRatio <= 0.52) {
            objs.messageC.style.opacity = calcValues(values?.messageC_opacity_in,currentScrollY);
            objs.messageC.style.transform = `translate3d(0, ${calcValues(values?.messageC_translateY_in,currentScrollY)}%, 0)`;
          } else {
            objs.messageC.style.opacity = calcValues(values?.messageC_opacity_out,currentScrollY);
            objs.messageC.style.transform = `translate3d(0, ${calcValues(values?.messageC_translateY_out,currentScrollY)}%, 0)`;
          }
        }

        if (objs.messageD) {
          if (scrollRatio <= 0.82) {
            objs.messageD.style.opacity = calcValues(values?.messageD_opacity_in,currentScrollY);
            objs.messageD.style.transform = `translate3d(0, ${calcValues(values?.messageD_translateY_in,currentScrollY)}%, 0)`;
          } else {
            objs.messageD.style.opacity = calcValues(values?.messageD_opacity_out,currentScrollY);
            objs.messageD.style.transform = `translate3d(0, ${calcValues(values?.messageD_translateY_out,currentScrollY)}%, 0)`;
          }
        }
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
    }
  }, []);

  const calcValues = (values: any, currentScrollY: any) => {
    let rv;
    const scrollHeight = scenes[currentScene].scrollHeight;
    const scrollRatio = currentScrollY / scrollHeight;

    if (values.length === 3) {
      const partScrollStart = values[2].start * scrollHeight;
      const partScrollEnd = values[2].end * scrollHeight;
      const partScrollHeight = partScrollEnd - partScrollStart;

      if (currentScrollY >= partScrollStart && currentScrollY <= partScrollEnd) {
        rv = ((currentScrollY - partScrollStart) / partScrollHeight) * (values[1] - values[0]) + values[0];
      } else if (currentScrollY < partScrollStart) {
        rv = values[0];
      } else if (currentScrollY > partScrollEnd) {
        rv = values[1];
      }
    } else {
      rv = scrollRatio * (values[1] - values[0]) + values[0];
    }

    return rv;
  };

  return { container };
};

export default useScrollScene;
