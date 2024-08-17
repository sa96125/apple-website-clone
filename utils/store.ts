import { create } from "zustand";

interface BlurState {
  isBlurred: boolean;
  toggleBlur: () => void;
  enableBlur: () => void;
  disableBlur: () => void;
}

const useBlurStore = create<BlurState>((set) => ({
  isBlurred: false,
  toggleBlur: () => set((state) => ({ isBlurred: !state.isBlurred })),
  enableBlur: () => set(() => ({ isBlurred: true })),
  disableBlur: () => set(() => ({ isBlurred: false })),
}));

export default useBlurStore;
