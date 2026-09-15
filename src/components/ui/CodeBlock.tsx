import React, { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { ICodeExample } from "../../types";

interface CodeBlockProps {
  example: ICodeExample;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ example }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(example.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const lines = example.code.trim().split("\n");

  return (
    <div className="code-block-wrapper my-3 rounded-xl overflow-hidden border border-zinc-700/50 bg-[#0d1117] text-zinc-100 shadow-xl">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-zinc-800 text-xs text-zinc-400">
        <div className="flex items-center space-x-2">
          <span className="flex space-x-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
          </span>
          <span className="font-mono uppercase font-bold text-indigo-400 tracking-wider">
            {example.language || "typescript"}
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center space-x-1 px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition cursor-pointer text-xs"
          title="Copiar al portapapeles"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Copiado</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>

      {/* Code Editor body with line numbers */}
      <div className="p-4 overflow-x-auto font-mono text-[13px] leading-relaxed select-text">
        <table className="border-collapse w-full">
          <tbody>
            {lines.map((line, idx) => (
              <tr key={idx} className="hover:bg-zinc-800/40 transition-colors">
                <td className="pr-4 text-right select-none text-zinc-600 w-8 text-xs font-mono align-top">
                  {idx + 1}
                </td>
                <td className="whitespace-pre font-mono text-zinc-200">
                  {line}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Output Console (if present) */}
      {example.output && (
        <div className="px-4 py-2.5 bg-[#090d13] border-t border-zinc-800/80 font-mono text-xs flex items-start space-x-2 text-emerald-400">
          <Terminal className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400" />
          <div>
            <span className="text-zinc-500 select-none mr-2 font-semibold">Salida esperada:</span>
            <span className="text-emerald-300">{example.output}</span>
          </div>
        </div>
      )}

      {/* Code Explanation (if present) */}
      {example.explanation && (
        <div className="px-4 py-2.5 bg-[#12161f] border-t border-zinc-800/80 text-xs text-zinc-300 flex items-start space-x-2">
          <span className="text-indigo-400 font-bold shrink-0">💡 Clave:</span>
          <span>{example.explanation}</span>
        </div>
      )}
    </div>
  );
};
