import React from "react";
import { RefreshCw, WifiOff, X } from "lucide-react";
import { useRegisterSW } from "virtual:pwa-register/react";

/** Avisa cuando la app ya funciona sin conexión o cuando hay una versión nueva. */
export const UpdatePrompt: React.FC = () => {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker
  } = useRegisterSW();

  if (!offlineReady && !needRefresh) return null;

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <div
      role="status"
      className="fixed bottom-4 right-4 z-50 max-w-sm p-4 rounded-2xl border border-indigo-500/40 bg-zinc-900 shadow-2xl flex items-start gap-3 text-sm animate-fade-in"
    >
      {needRefresh ? (
        <RefreshCw className="w-4 h-4 text-indigo-400 mt-0.5" />
      ) : (
        <WifiOff className="w-4 h-4 text-emerald-400 mt-0.5" />
      )}
      <div className="flex-1 space-y-2">
        <p className="text-zinc-200">
          {needRefresh
            ? "Hay una nueva versión disponible."
            : "Lista para usar sin conexión: todo el temario está guardado en este dispositivo."}
        </p>
        {needRefresh && (
          <button
            onClick={() => updateServiceWorker(true)}
            className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold cursor-pointer"
          >
            Actualizar
          </button>
        )}
      </div>
      <button onClick={close} className="text-zinc-500 hover:text-white cursor-pointer" aria-label="Cerrar aviso">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
