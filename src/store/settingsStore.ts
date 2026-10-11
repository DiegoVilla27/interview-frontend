import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SettingsState {
  /** API key de Gemini del usuario (BYOK). Solo se guarda en este navegador. */
  geminiApiKey: string;
  setGeminiApiKey: (key: string) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      geminiApiKey: "",
      setGeminiApiKey: (geminiApiKey) => set({ geminiApiKey: geminiApiKey.trim() })
    }),
    {
      name: "interview-frontend-settings",
      version: 1,
      migrate: () => ({ geminiApiKey: "" }),
      partialize: (state) => ({ geminiApiKey: state.geminiApiKey })
    }
  )
);
