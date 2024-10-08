import { useEffect, useRef, useCallback } from "react";
import { Scene } from "@/utils/types";

let scrollY = 0;
let currentScene = 0;
let prevScrollHeight = 0;
let enterNewScene = false;
let scenes: Scene[] = [];
let acc = 0.1;
let deleyedScrollY = 0;
let rafId: number | null = null;

const useScrollScene = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scenes = [
      {
        type: "normal",
        heightNum: 0,
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
          messageA: document.querySelector(
            "#scroll-section-1 .message-item.a"
          ) as HTMLElement,
          messageB: document.querySelector(
            "#scroll-section-1 .message-item.b"
          ) as HTMLElement,
          messageC: document.querySelector(
            "#scroll-section-1 .message-item.c"
          ) as HTMLElement,
          messageD: document.querySelector(
            "#scroll-section-1 .message-item.d"
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

          messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
          messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
          messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
          messageD_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
        },
      },
      {
        type: "normal",
        heightNum: 0,
        scrollHeight: 0,
        objs: {
          container: document.querySelector("#scroll-section-2") as HTMLElement,
        },
      },
      {
        type: "sticky",
        heightNum: 4,
        scrollHeight: 0,
        objs: {
          container: document.querySelector("#scroll-section-3") as HTMLElement,
          messageA: document.querySelector(
            "#scroll-section-3 .desc-message-item.a"
          ) as HTMLElement,
          messageB: document.querySelector(
            "#scroll-section-3 .desc-message-item.b"
          ) as HTMLElement,
          messageC: document.querySelector(
            "#scroll-section-3 .desc-message-item.c"
          ) as HTMLElement,
          messageD: document.querySelector(
            "#scroll-section-3 .desc-message-item.d"
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
          messageD_opacity_out: [1, 0, { start: 0.80, end: 0.9 }],

          messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
          messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
          messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
          messageD_translateY_out: [0, -200, { start: 0.85, end: 0.9 }],
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
    window.addEventListener("scroll", () => {
      checkMenu();
      scrollY = window.scrollY;
      if (!rafId) {
        rafId = requestAnimationFrame(scrollLoop);
      }
    });

    return () => {
      window.removeEventListener("load", setLayout);
      window.removeEventListener("resize", setLayout);
      window.removeEventListener("scroll", () => {
        scrollY = window.scrollY;
        if (!rafId) {
          rafId = requestAnimationFrame(scrollLoop);
        }
      });
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
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

  function scrollLoop() {
    deleyedScrollY += (scrollY - deleyedScrollY) * acc;

    if (Math.abs(scrollY - deleyedScrollY) < 1) {
      deleyedScrollY = scrollY;
      rafId = null; // 애니메이션 완료 시 requestAnimationFrame 종료
    } else {
      rafId = requestAnimationFrame(scrollLoop);
    }

    enterNewScene = false;
    prevScrollHeight = 0;

    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += scenes[i].scrollHeight;
    }

    if (deleyedScrollY > prevScrollHeight + scenes[currentScene].scrollHeight) {
      enterNewScene = true;
      currentScene++;
      container.current?.setAttribute("id", `show-scene-${currentScene}`);
    }

    if (deleyedScrollY < prevScrollHeight) {
      enterNewScene = true;
      if (currentScene === 0) return;
      currentScene--;
      container.current?.setAttribute("id", `show-scene-${currentScene}`);
    }

    if (!enterNewScene) {
      playAnimation();
    }
  }

  function calcValues(values: any, currentScrollY: number) {
    let rv;
    const scrollHeight = scenes[currentScene].scrollHeight;
    const scrollRatio = currentScrollY / scrollHeight;

    if (values.length === 3) {
      const partScrollStart = values[2].start * scrollHeight;
      const partScrollEnd = values[2].end * scrollHeight;
      const partScrollHeight = partScrollEnd - partScrollStart;

      if (
        currentScrollY >= partScrollStart &&
        currentScrollY <= partScrollEnd
      ) {
        rv =
          ((currentScrollY - partScrollStart) / partScrollHeight) *
            (values[1] - values[0]) +
          values[0];
      } else if (currentScrollY < partScrollStart) {
        rv = values[0];
      } else if (currentScrollY > partScrollEnd) {
        rv = values[1];
      }
    } else {
      rv = scrollRatio * (values[1] - values[0]) + values[0];
    }

    return rv;
  }

  function checkMenu() {
    if (scrollY > 48) {
      document.body.classList.add("local-nav-sticky");
    } else {
      document.body.classList.remove("local-nav-sticky");
    }
  }

  function playAnimation() {
    const objs = scenes[currentScene].objs;
    const values = scenes[currentScene].values;
    const currentScrollY = scrollY - prevScrollHeight;
    const scrollHeight = scenes[currentScene].scrollHeight;
    const scrollRatio = currentScrollY / scrollHeight;

    switch (currentScene) {
      case 1:
        if (objs.messageA) {
          if (scrollRatio <= 0.22) {
            objs.messageA.style.opacity = calcValues(
              values?.messageA_opacity_in ?? 1,
              currentScrollY
            );
            objs.messageA.style.transform = `translate3d(0, ${calcValues(
              values?.messageA_translateY_in ?? 0,
              currentScrollY
            )}%, 0)`;
          } else {
            objs.messageA.style.opacity = calcValues(
              values?.messageA_opacity_out ?? 0,
              currentScrollY
            );
            objs.messageA.style.transform = `translate3d(0, ${calcValues(
              values?.messageA_translateY_out ?? 0,
              currentScrollY
            )}%, 0)`;
          }
        }

        if (objs.messageB) {
          if (scrollRatio <= 0.32) {
            objs.messageB.style.opacity = calcValues(
              values?.messageB_opacity_in ?? 1,
              currentScrollY
            );
            objs.messageB.style.transform = `translate3d(0, ${calcValues(
              values?.messageB_translateY_in ?? 0,
              currentScrollY
            )}%, 0)`;
          } else {
            objs.messageB.style.opacity = calcValues(
              values?.messageB_opacity_out ?? 0,
              currentScrollY
            );
            objs.messageB.style.transform = `translate3d(0, ${calcValues(
              values?.messageB_translateY_out ?? 0,
              currentScrollY
            )}%, 0)`;
          }
        }

        if (objs.messageC) {
          if (scrollRatio <= 0.52) {
            objs.messageC.style.opacity = calcValues(
              values?.messageC_opacity_in ?? 1,
              currentScrollY
            );
            objs.messageC.style.transform = `translate3d(0, ${calcValues(
              values?.messageC_translateY_in ?? 0,
              currentScrollY
            )}%, 0)`;
          } else {
            objs.messageC.style.opacity = calcValues(
              values?.messageC_opacity_out ?? 0,
              currentScrollY
            );
            objs.messageC.style.transform = `translate3d(0, ${calcValues(
              values?.messageC_translateY_out ?? 0,
              currentScrollY
            )}%, 0)`;
          }
        }

        if (objs.messageD) {
          if (scrollRatio <= 0.82) {
            objs.messageD.style.opacity = calcValues(
              values?.messageD_opacity_in ?? 1,
              currentScrollY
            );
            objs.messageD.style.transform = `translate3d(0, ${calcValues(
              values?.messageD_translateY_in ?? 0,
              currentScrollY
            )}%, 0)`;
          } else {
            objs.messageD.style.opacity = calcValues(
              values?.messageD_opacity_out ?? 0,
              currentScrollY
            );
            objs.messageD.style.transform = `translate3d(0, ${calcValues(
              values?.messageD_translateY_out ?? 0,
              currentScrollY
            )}%, 0)`;
          }
        }
        break;
      case 3:
        if (objs.messageA) {
          if (scrollRatio <= 0.22) {
            objs.messageA.style.opacity = calcValues(
              values?.messageA_opacity_in ?? 1,
              currentScrollY
            );
            objs.messageA.style.transform = `translate3d(0, ${calcValues(
              values?.messageA_translateY_in ?? 0,
              currentScrollY
            )}%, 0)`;
          } else {
            objs.messageA.style.opacity = calcValues(
              values?.messageA_opacity_out ?? 0,
              currentScrollY
            );
            objs.messageA.style.transform = `translate3d(0, ${calcValues(
              values?.messageA_translateY_out ?? 0,
              currentScrollY
            )}%, 0)`;
          }
        }

        if (objs.messageB) {
          if (scrollRatio <= 0.32) {
            objs.messageB.style.opacity = calcValues(
              values?.messageB_opacity_in ?? 1,
              currentScrollY
            );
            objs.messageB.style.transform = `translate3d(0, ${calcValues(
              values?.messageB_translateY_in ?? 0,
              currentScrollY
            )}%, 0)`;
          } else {
            objs.messageB.style.opacity = calcValues(
              values?.messageB_opacity_out ?? 0,
              currentScrollY
            );
            objs.messageB.style.transform = `translate3d(0, ${calcValues(
              values?.messageB_translateY_out ?? 0,
              currentScrollY
            )}%, 0)`;
          }
        }

        if (objs.messageC) {
          if (scrollRatio <= 0.52) {
            objs.messageC.style.opacity = calcValues(
              values?.messageC_opacity_in ?? 1,
              currentScrollY
            );
            objs.messageC.style.transform = `translate3d(0, ${calcValues(
              values?.messageC_translateY_in ?? 0,
              currentScrollY
            )}%, 0)`;
          } else {
            objs.messageC.style.opacity = calcValues(
              values?.messageC_opacity_out ?? 0,
              currentScrollY
            );
            objs.messageC.style.transform = `translate3d(0, ${calcValues(
              values?.messageC_translateY_out ?? 0,
              currentScrollY
            )}%, 0)`;
          }
        }

        if (objs.messageD) {
          if (scrollRatio <= 0.82) {
            objs.messageD.style.opacity = calcValues(
              values?.messageD_opacity_in ?? 1,
              currentScrollY
            );
            objs.messageD.style.transform = `translate3d(0, ${calcValues(
              values?.messageD_translateY_in ?? 0,
              currentScrollY
            )}%, 0)`;
          } else {
            objs.messageD.style.opacity = calcValues(
              values?.messageD_opacity_out ?? 0,
              currentScrollY
            );
            objs.messageD.style.transform = `translate3d(0, ${calcValues(
              values?.messageD_translateY_out ?? 0,
              currentScrollY
            )}%, 0)`;
          }
        }
        break;
    }
  }

  return { container };
};

export default useScrollScene;
