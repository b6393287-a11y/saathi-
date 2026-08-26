import { useState, useRef, useCallback, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import type { LanguageCode } from '@/i18n/translations';

type CharState = 'idle' | 'welcome' | 'listening' | 'thinking' | 'speaking' | 'success' | 'warning';

interface SpeechHookResult {
  isListening: boolean;
  isThinking: boolean;
  isSpeaking: boolean;
  transcript: string;
  error: string | null;
  charState: CharState;
  startListening: () => void;
  stopListening: () => void;
  speak: (text: string) => void;
  stopSpeaking: () => void;
  setCharState: (state: CharState) => void;
}

const langCodeMap: Record<LanguageCode, string> = {
  hi: 'hi-IN',
  en: 'en-IN',
  bho: 'hi-IN',
  awd: 'hi-IN',
};

export function useSpeech(): SpeechHookResult {
  const { lang } = useLanguage();
  const [isListening, setIsListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [charState, setCharState] = useState<CharState>('idle');

  const recognitionRef = useRef<any>(null);
  const speechSynthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      speechSynthRef.current = window.speechSynthesis;
    }
    return () => {
      if (speechSynthRef.current) {
        speechSynthRef.current.cancel();
      }
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  const startListening = useCallback(() => {
    setError(null);
    setTranscript('');

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setError('unsupported');
      return;
    }

    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // ignore
      }
    }

    const recognition = new SpeechRecognition();
    recognition.lang = langCodeMap[lang];
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onstart = () => {
      setIsListening(true);
      setCharState('listening');
    };

    recognition.onresult = (event: any) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        finalTranscript += event.results[i][0].transcript;
      }
      setTranscript(finalTranscript);
    };

    recognition.onerror = (event: any) => {
      if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
        setError('permission');
      } else if (event.error === 'no-speech') {
        // no-op, just ended
      } else {
        setError(event.error || 'error');
      }
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    try {
      recognition.start();
    } catch {
      // already started
    }
  }, [lang]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // ignore
      }
    }
    setIsListening(false);
  }, []);

  const speak = useCallback(
    (text: string) => {
      if (!speechSynthRef.current) return;

      speechSynthRef.current.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = langCodeMap[lang];
      utterance.rate = 0.9;
      utterance.pitch = 1;

      const voices = speechSynthRef.current.getVoices();
      const matchingVoice = voices.find(
        (v) => v.lang === langCodeMap[lang] || v.lang.startsWith(langCodeMap[lang].split('-')[0])
      );
      if (matchingVoice) {
        utterance.voice = matchingVoice;
      }

      utterance.onstart = () => {
        setIsSpeaking(true);
        setCharState('speaking');
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        setCharState('idle');
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
        setCharState('idle');
      };

      speechSynthRef.current.speak(utterance);
    },
    [lang]
  );

  const stopSpeaking = useCallback(() => {
    if (speechSynthRef.current) {
      speechSynthRef.current.cancel();
    }
    setIsSpeaking(false);
  }, []);

  return {
    isListening,
    isThinking,
    isSpeaking,
    transcript,
    error,
    charState,
    startListening,
    stopListening,
    speak,
    stopSpeaking,
    setCharState,
  };
}
