import React, { useState } from "react";
import { Eye, EyeOff, KeyRound, ShieldAlert } from "lucide-react";
import { Modal } from "../../components/ui/Modal";
import { Button } from "../../components/ui/Button";
import { useSettingsStore } from "../../store/settingsStore";

interface SettingsModalProps {
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ onClose }) => {
  const { anthropicApiKey, setAnthropicApiKey } = useSettingsStore();
  const [draft, setDraft] = useState(anthropicApiKey);
  const [isVisible, setIsVisible] = useState(false);

  const handleSave = () => {
    setAnthropicApiKey(draft);
    onClose();
  };

  return (
    <Modal isOpen onClose={onClose} maxWidth="lg" title="Ajustes">
      <div className="space-y-5">
        <section className="space-y-3">
          <div className="space-y-1">
            <h3 className="font-bold text-sm text-zinc-100 flex items-center gap-2">
              <KeyRound className="w-4 h-4 text-indigo-400" />
              Evaluación con IA (opcional)
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Con tu propia API key de Anthropic, Claude puede puntuar tus respuestas en la entrevista simulada.
              Puedes crear una en{" "}
              <a
                href="https://platform.claude.com/settings/keys"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-300 hover:text-indigo-200 underline"
              >
                platform.claude.com
              </a>
              .
            </p>
          </div>

          <label className="block space-y-1.5">
            <span className="text-xs font-semibold text-zinc-300">API key de Anthropic</span>
            <div className="relative">
              <input
                type={isVisible ? "text" : "password"}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="sk-ant-..."
                autoComplete="off"
                spellCheck={false}
                className="w-full pl-3 pr-10 py-2 text-sm font-mono rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-indigo-500"
              />
              <button
                type="button"
                onClick={() => setIsVisible((v) => !v)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-white cursor-pointer"
                aria-label={isVisible ? "Ocultar API key" : "Mostrar API key"}
              >
                {isVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </label>

          <div className="flex gap-2 p-3 rounded-xl border border-amber-500/30 bg-amber-950/20 text-xs text-amber-200 leading-relaxed">
            <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
            <p>
              La clave se guarda solo en el localStorage de este navegador y se envía únicamente a api.anthropic.com.
              Cada evaluación consume créditos de tu cuenta. No la uses en equipos compartidos.
            </p>
          </div>
        </section>

        <div className="flex justify-between gap-2 pt-2 border-t border-zinc-800">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              setAnthropicApiKey("");
              setDraft("");
            }}
            disabled={!anthropicApiKey}
          >
            Borrar clave
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={onClose}>
              Cancelar
            </Button>
            <Button variant="primary" size="sm" onClick={handleSave}>
              Guardar
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
