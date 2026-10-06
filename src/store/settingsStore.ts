import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SettingsState {
  /** API key de Anthropic del usuario (BYOK). Solo se guarda en este navegador. */
  anthropicApiKey: string;
  setAnthropicApiKey: (key: string) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      anthropicApiKey: "",
      setAnthropicApiKey: (anthropicApiKey) => set({ anthropicApiKey: anthropicApiKey.trim() })
    }),
    { name: "interview-frontend-settings" }
  )
);
