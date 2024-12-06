import { create } from "zustand";

interface MusicPlayerStoreState {
  musicIsPlaying: boolean;
}

interface MusicPlayerStoreActions {
  toggleMusic: () => void;
}

export const useMusicPlayerStore = create<
  MusicPlayerStoreState & MusicPlayerStoreActions
>((set) => ({
  musicIsPlaying: false,
  toggleMusic: () =>
    set((state) => ({
      musicIsPlaying: !state.musicIsPlaying,
    })),
}));
