import { create } from "zustand";

interface ThemeStoreState {
  theme: "light" | "dark";
}

interface ThemeStoreActions {
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark") => void;
}

export const useThemeStore = create<ThemeStoreState & ThemeStoreActions>(
  (set) => ({
    theme: (localStorage.getItem("theme") as "light" | "dark") || "light",
    toggleTheme: () => {
      set((state) => {
        const newTheme = state.theme === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        document.body.classList.remove(state.theme);
        document.body.classList.add(newTheme);
        return { theme: newTheme };
      });
    },
    setTheme: (theme) => {
      localStorage.setItem("theme", theme);
      document.body.classList.remove("light", "dark");
      document.body.classList.add(theme);
      set({ theme });
    },
  })
);
