import { useState, useRef, useEffect, useCallback } from 'react';
import { Mic, Square, Send, Volume2, VolumeX, AlertCircle, RefreshCw } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useSpeech } from '@/hooks/useSpeech';
import { SaathiCharacter } from '@/components/SaathiCharacter';
import type { LanguageCode } from '@/i18n/translations';

interface Message {
  id: number;
  role: 'user' | 'saathi';
  text: string;
  lang: LanguageCode;
}

// Demo responses based on keywords
function generateResponse(input: string, lang: LanguageCode): string {
  const lower = input.toLowerCase();
  const t = {
    hi: {
      yojana: 'आपके लिए कई सरकारी योजनाएँ हैं। क्या आप किसान हैं? आप किस राज्य में रहते हैं? यह बताएँ तो मैं आपके लिए सही योजनाएँ ढूँढ सकता हूँ।',
      fee: 'कौन सी सरकारी सेवा है और कितना पैसा माँगा गया है? यह बताएँ तो मैं जाँच सकता हूँ कि यह आधिकारिक फीस है या नहीं।',
      rule: 'आपने क्या सुना है? उसे बताएँ — मैं उसे आधिकारिक जानकारी से जाँचूँगा।',
      farmer: 'किसानों के लिए PM-KISAN, किसान क्रेडिट कार्ड, और कृषि बीमा योजनाएँ हैं। क्या आप ज़मीन के कागज़ और आधार कार्ड रखते हैं?',
      health: 'स्वास्थ्य के लिए आयुष्मान भारत योजना है जिसमें ₹5 लाख तक का मुफ़्त इलाज मिलता है। क्या आपके पास आधार कार्ड है?',
      default: 'मैं आपकी मदद करता हूँ। आप सरकारी योजनाओं, फीस, नियमों, या दस्तावेज़ों के बारे में पूछ सकते हैं। बोलने के लिए माइक्रोफ़ोन बटन दबाएँ।',
    },
    en: {
      yojana: 'There are many government schemes for you. Are you a farmer? Which state do you live in? Tell me and I can find the right schemes for you.',
      fee: 'Which government service is it and how much money is being asked? Tell me and I can check if it is an official fee or not.',
      rule: 'What did you hear? Tell me — I will check it against official information.',
      farmer: 'For farmers, there is PM-KISAN, Kisan Credit Card, and Crop Insurance. Do you have land records and an Aadhaar card?',
      health: 'For health, there is Ayushman Bharat which provides up to ₹5 lakh of free treatment. Do you have an Aadhaar card?',
      default: 'I am here to help. You can ask about government schemes, fees, rules, or documents. Press the microphone button to speak.',
    },
    bho: {
      yojana: 'आपक खातिर कई सरकारी योजना बा। का आप किसान बानी? आप कवन राज्य में रहत बानी? ई बताईं त हम आपक खातिर सही योजना खोज सकत बानी।',
      fee: 'कवन सरकारी सेवा बा औ कतना पइसा माँगल गेल बा? ई बताईं त हम जाँच सकत बानी कि ई आधिकारिक फीस बा कि नाहीं।',
      rule: 'आप का सुनल बानी? ओकरा बताईं — हम ओकरा आधिकारिक जानकारी से जाँचत बानी।',
      farmer: 'किसान खातिर PM-KISAN, किसान क्रेडिट कार्ड, औ कृषि बीमा योजना बा। का आपकै जमीन क कागज औ आधार कार्ड बा?',
      health: 'सेहत खातिर आयुष्मान भारत योजना बा जेहि में ₹5 लाख तक मुफ्त इलाज मिलत बा। का आपकै आधार कार्ड बा?',
      default: 'हम आपक मदद करत बानी। आप सरकारी योजना, फीस, नियम, अथवा दस्तावेज क बारे में पूछ सकत बानी। बोले खातिर माइक्रोफोन बटन दबाईं।',
    },
    awd: {
      yojana: 'आपकै खातिर कई सरकारी योजना है। क्या आप किसान हैं? आप कवन राज्य में रहत हैं? ई बतावौ त हम आपकै खातिर सही योजना खोज सकत हौं।',
      fee: 'कवन सरकारी सेवा है औ कतना पइसा माँगा गया है? ई बतावौ त हम जाँच सकत हौं कि ई आधिकारिक फीस है कि नाहीं।',
      rule: 'आप का सुना है? उकरा बतावौ — हम उकरा आधिकारिक जानकारी से जाँचत हौं।',
      farmer: 'किसान खातिर PM-KISAN, किसान क्रेडिट कार्ड, औ कृषि बीमा योजना है। क्या आपकै जमीन क कागज औ आधार कार्ड है?',
      health: 'सेहत खातिर आयुष्मान भारत योजना है जउन में ₹5 लाख तक मुफ्त इलाज मिलत है। क्या आपकै आधार कार्ड है?',
      default: 'हम आपकै मदद करत हौं। आप सरकारी योजना, फीस, नियम, अथवा दस्तावेज क बारे में पूछ सकत हैं। बोलै खातिर माइक्रोफोन बटन दबावौ।',
    },
  };

  const r = t[lang];
  if (lower.includes('yojana') || lower.includes('योजना') || lower.includes('योजना') || lower.includes('scheme') || lower.includes('योजना') || lower.includes('योजना')) return r.yojana;
  if (lower.includes('fee') || lower.includes('फीस') || lower.includes('फीस') || lower.includes('फीस') || lower.includes('रिश्वत') || lower.includes('bribe') || lower.includes('पैसा') || lower.includes('पइसा') || lower.includes('पइसा')) return r.fee;
  if (lower.includes('rule') || lower.includes('नियम') || lower.includes('नियम') || lower.includes('नियम') || lower.includes('सच')) return r.rule;
  if (lower.includes('kisan') || lower.includes('किसान') || lower.includes('किसान') || lower.includes('farmer') || lower.includes('किसान')) return r.farmer;
  if (lower.includes('health') || lower.includes('स्वास्थ्य') || lower.includes('सेहत') || lower.includes('hospital') || lower.includes('इलाज')) return r.health;
  return r.default;
}

export function AskPage() {
  const { t, lang } = useLanguage();
  const speech = useSpeech();
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: 'saathi', text: t.voice.conversationStart, lang },
  ]);
  const [textInput, setTextInput] = useState('');
  const [autoSpeak, setAutoSpeak] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageIdRef = useRef(1);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Update first message when language changes
  useEffect(() => {
    setMessages([{ id: 0, role: 'saathi', text: t.voice.conversationStart, lang }]);
    messageIdRef.current = 1;
  }, [lang]);

  // Handle speech recognition transcript
  useEffect(() => {
    if (speech.transcript && !speech.isListening) {
      handleUserMessage(speech.transcript);
    }
  }, [speech.isListening, speech.transcript]);

  const handleUserMessage = useCallback(
    (text: string) => {
      if (!text.trim()) return;

      const userMsg: Message = { id: messageIdRef.current++, role: 'user', text, lang };
      setMessages((prev) => [...prev, userMsg]);

      // Thinking state
      speech.setCharState('thinking');

      setTimeout(() => {
        const response = generateResponse(text, lang);
        const saathiMsg: Message = { id: messageIdRef.current++, role: 'saathi', text: response, lang };
        setMessages((prev) => [...prev, saathiMsg]);

        if (autoSpeak) {
          speech.speak(response);
        } else {
          speech.setCharState('idle');
        }
      }, 1500);
    },
    [lang, autoSpeak]
  );

  const handleMicClick = () => {
    if (speech.isListening) {
      speech.stopListening();
    } else {
      speech.stopSpeaking();
      speech.startListening();
    }
  };

  const handleSendText = () => {
    if (textInput.trim()) {
      handleUserMessage(textInput);
      setTextInput('');
    }
  };

  const handleExampleClick = (question: string) => {
    handleUserMessage(question);
  };

  const handleSpeakMessage = (text: string) => {
    speech.speak(text);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="section-title mb-2">{t.voice.title}</h1>
        <p className="text-lg text-ink-500">{t.voice.subtitle}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        {/* Chat area */}
        <div className="card flex flex-col" style={{ minHeight: '500px' }}>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-hide" style={{ maxHeight: '400px' }}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                {msg.role === 'saathi' && (
                  <div className="shrink-0">
                    <SaathiCharacter state="idle" size={40} showSoundWaves={false} />
                  </div>
                )}
                <div
                  className={`rounded-2xl px-4 py-3 max-w-[80%] ${
                    msg.role === 'user'
                      ? 'bg-saathi-600 text-white'
                      : 'bg-saathi-50 text-ink-800 border border-saathi-100'
                  }`}
                >
                  <p className="text-sm font-medium mb-1 opacity-70">
                    {msg.role === 'user' ? t.common.youSaid : t.common.saathiSays}
                  </p>
                  <p className="text-base leading-relaxed">{msg.text}</p>
                  {msg.role === 'saathi' && (
                    <button
                      onClick={() => handleSpeakMessage(msg.text)}
                      className="mt-2 flex items-center gap-1 text-xs font-semibold text-saathi-600 hover:text-saathi-700"
                    >
                      <Volume2 className="h-3.5 w-3.5" />
                      {t.common.listen}
                    </button>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Status indicator */}
          <div className="mt-4 flex items-center justify-center gap-2 text-sm font-medium">
            {speech.isListening && (
              <span className="flex items-center gap-2 text-saffron-600">
                <span className="flex items-end gap-0.5">
                  {[0, 1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className="w-1 rounded-full bg-saffron-500 animate-sound-wave"
                      style={{ height: '12px', animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </span>
                {t.voice.listening}
              </span>
            )}
            {speech.charState === 'thinking' && (
              <span className="flex items-center gap-2 text-ink-500">
                <RefreshCw className="h-4 w-4 animate-spin" />
                {t.voice.thinking}
              </span>
            )}
            {speech.isSpeaking && (
              <span className="flex items-center gap-2 text-saathi-600">
                <Volume2 className="h-4 w-4" />
                {t.voice.speaking}
              </span>
            )}
          </div>

          {/* Text input */}
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendText()}
              placeholder={t.voice.typePlaceholder}
              className="input-field flex-1"
            />
            <button
              onClick={handleSendText}
              className="btn-primary px-4"
              aria-label={t.voice.sendButton}
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Side panel: Character + mic + examples */}
        <div className="flex flex-col gap-4">
          {/* Character */}
          <div className="card flex flex-col items-center justify-center py-6">
            <SaathiCharacter state={speech.charState} size={160} />
            <p className="mt-2 text-center text-sm font-medium text-ink-600">
              {speech.isListening ? t.voice.listening : speech.charState === 'thinking' ? t.voice.thinking : speech.isSpeaking ? t.voice.speaking : t.home.heroGreeting}
            </p>
          </div>

          {/* Mic button */}
          <button
            onClick={handleMicClick}
            className={`relative flex flex-col items-center justify-center gap-3 rounded-3xl p-6 transition-all active:scale-[0.98] ${
              speech.isListening
                ? 'bg-saffron-500 text-white shadow-glow-saffron'
                : 'bg-saathi-600 text-white shadow-soft hover:bg-saathi-700 hover:shadow-card'
            }`}
          >
            <div className="relative">
              {speech.isListening && (
                <>
                  <div className="absolute inset-0 rounded-full bg-white/30 animate-pulse-ring" />
                  <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse-ring" style={{ animationDelay: '0.5s' }} />
                </>
              )}
              {speech.isListening ? (
                <Square className="h-12 w-12 relative z-10 fill-white" />
              ) : (
                <Mic className="h-12 w-12 relative z-10" />
              )}
            </div>
            <span className="text-lg font-bold">
              {speech.isListening ? t.voice.stopListening : t.voice.tapAndSpeak}
            </span>
          </button>

          {/* Auto-speak toggle */}
          <button
            onClick={() => setAutoSpeak(!autoSpeak)}
            className={`flex items-center justify-center gap-2 rounded-2xl border-2 p-3 text-sm font-semibold transition-all ${
              autoSpeak
                ? 'border-saathi-300 bg-saathi-50 text-saathi-700'
                : 'border-ink-200 bg-white text-ink-400'
            }`}
          >
            {autoSpeak ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            {autoSpeak ? t.common.listen : 'Mute'}
          </button>

          {/* Error messages */}
          {speech.error === 'permission' && (
            <div className="rounded-2xl bg-saffron-50 border border-saffron-200 p-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-saffron-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-saffron-800">{t.voice.permissionDenied}</p>
                  <p className="text-xs text-saffron-700 mt-1">{t.voice.permissionDeniedDesc}</p>
                </div>
              </div>
            </div>
          )}
          {speech.error === 'unsupported' && (
            <div className="rounded-2xl bg-saffron-50 border border-saffron-200 p-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-saffron-600 shrink-0 mt-0.5" />
                <p className="text-sm text-saffron-800">{t.voice.micNotSupported}</p>
              </div>
            </div>
          )}

          {/* Example questions */}
          <div className="card">
            <p className="text-sm font-semibold text-ink-600 mb-3">{t.voice.trySaying}</p>
            <div className="space-y-2">
              {t.voice.exampleQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleExampleClick(q)}
                  className="block w-full text-left rounded-xl bg-saathi-50 px-3 py-2 text-sm text-ink-700 hover:bg-saathi-100 transition-colors"
                >
                  "{q}"
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
