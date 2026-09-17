import React, { ReactNode } from "react";
import { ExternalLink, Code2 } from "lucide-react";

interface IProps {
  theme?: boolean;
  setTheme?: (theme: boolean) => void;
  children: ReactNode;
}

const LayoutScreen: React.FC<IProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f12] text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Glassmorphic Navigation Bar */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-[#0f0f12]/80 border-b border-zinc-800/80 px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-600/30">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-sm sm:text-base tracking-tight block leading-tight text-white">
                Frontend Interview Pro
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Cabuweb Portfolio Link */}
            <a
              href="https://cabuweb.com"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-xl border border-zinc-700/60 bg-zinc-800/40 hover:bg-zinc-800 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition flex items-center space-x-1 shadow-sm"
            >
              <span>Cabuweb</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </nav>

      {/* Main App Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-6">
        {children}
      </main>

      {/* Modern Footer */}
      <footer className="border-t border-zinc-800/80 py-6 px-4 bg-[#09090b]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
          <p className="m-0">
            Desarrollado por{" "}
            <span className="font-bold text-zinc-200">Diego Villa</span> —{" "}
            <a
              className="font-semibold text-indigo-400 hover:text-indigo-300 transition"
              href="https://cabuweb.com"
              target="_blank"
              rel="noreferrer"
            >
              Cabuweb.com
            </a>
          </p>
          <p className="m-0 text-zinc-500 font-mono text-[11px]">
            Diseñado para preparación de entrevistas de Frontend Engineer
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LayoutScreen;
