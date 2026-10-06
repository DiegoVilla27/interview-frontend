import { useEffect, useRef, useState } from "react";

// La Web Speech API no está en lib.dom de TypeScript: tipado mínimo de lo que usamos
interface ISpeechRecognitionResult {
  isFinal: boolean;
  0: { transcript: string };
}
interface ISpeechRecognitionEvent {
  resultIndex: number;
  results: ArrayLike<ISpeechRecognitionResult>;
}
interface ISpeechRecognition {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((event: ISpeechRecognitionEvent) => void) | null;
  onend: (() => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  start: () => void;
  stop: () => void;
}
type TSpeechRecognitionCtor = new () => ISpeechRecognition;

const getRecognitionCtor = (): TSpeechRecognitionCtor | undefined => {
  if (typeof window === "undefined") return undefined;
  const w = window as unknown as Record<string, TSpeechRecognitionCtor | undefined>;
  return w.SpeechRecognition ?? w.webkitSpeechRecognition;
};

/**
 * Dictado por voz en español: cada frase reconocida se entrega a `onFinalText`.
 * `isSupported` es false en navegadores sin Web Speech API (p. ej. Firefox).
 */
export const useSpeechDictation = (onFinalText: (text: string) => void) => {
  const [isListening, setIsListening] = useState(false);
  const [interim, setInterim] = useState("");
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<ISpeechRecognition | null>(null);
  const onFinalTextRef = useRef(onFinalText);
  onFinalTextRef.current = onFinalText;

  const Ctor = getRecognitionCtor();

  const stop = () => {
    recognitionRef.current?.stop();
  };

  const start = () => {
    if (!Ctor || isListening) return;
    const recognition = new Ctor();
    recognition.lang = "es-ES";
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onresult = (event) => {
      let pending = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) onFinalTextRef.current(result[0].transcript.trim());
        else pending += result[0].transcript;
      }
      setInterim(pending);
    };
    recognition.onerror = (event) => {
      setError(event.error === "not-allowed" ? "Permiso de micrófono denegado." : `Error de dictado: ${event.error}`);
    };
    recognition.onend = () => {
      setIsListening(false);
      setInterim("");
    };
    setError(null);
    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  };

  useEffect(() => () => recognitionRef.current?.stop(), []);

  return { isSupported: Boolean(Ctor), isListening, interim, error, start, stop };
};
