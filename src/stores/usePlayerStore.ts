import { create } from "zustand";

interface IPlayerStore {
  accessToken: string;
  setAccessToken: (accessToken: string) => void;

  trackUris: string[];
  setTrackUris: (uris: string[]) => void;

  trackIndex: number;
  setTrackIndex: (index: number) => void;
}

export const usePlayerStore = create<IPlayerStore>((set) => ({
  accessToken: "",
  setAccessToken: (accessToken) => set((state) => ({ accessToken })),

  trackUris: [],
  setTrackUris: (uris) => set((state) => ({ trackUris: uris })),

  trackIndex: 0,
  setTrackIndex: (index) => set((state) => ({ trackIndex: index })),
}));
