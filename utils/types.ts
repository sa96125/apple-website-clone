export interface ValueRange {
  start: number;
  end: number;
}

export interface SceneValues {
  messageA_opacity_in?: [number, number, ValueRange?];
  messageB_opacity_in?: [number, number, ValueRange?];
  messageC_opacity_in?: [number, number, ValueRange?];
  messageD_opacity_in?: [number, number, ValueRange?];
  messageA_translateY_in?: [number, number, ValueRange?];
  messageB_translateY_in?: [number, number, ValueRange?];
  messageC_translateY_in?: [number, number, ValueRange?];
  messageD_translateY_in?: [number, number, ValueRange?];
  messageA_opacity_out?: [number, number, ValueRange?];
  messageB_opacity_out?: [number, number, ValueRange?];
  messageC_opacity_out?: [number, number, ValueRange?];
  messageD_opacity_out?: [number, number, ValueRange?];
  messageA_translateY_out?: [number, number, ValueRange?];
  messageB_translateY_out?: [number, number, ValueRange?];
  messageC_translateY_out?: [number, number, ValueRange?];
  messageD_translateY_out?: [number, number, ValueRange?];
}

export interface Scene {
  type: "normal" | "sticky";
  heightNum: number;
  scrollHeight: number;
  objs: {
    container: HTMLElement | null;
    messageA?: HTMLElement | null;
    messageB?: HTMLElement | null;
    messageC?: HTMLElement | null;
    messageD?: HTMLElement | null;
  };
  values?: SceneValues;
}
