import { useState } from 'react';
import { Newspaper, Volume2, Calendar, Sparkles, Clock, RefreshCw, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useSpeech } from '@/hooks/useSpeech';
import { SaathiCharacter } from '@/components/SaathiCharacter';

export function WhatsNewPage() {
  const { t } = useLanguage();
  const speech = useSpeech();
  const [listening, setListening] = useState(false);

  const typeConfig: Record<string, { icon: typeof Sparkles; color: string; bg: string; label: string }> = {
    newScheme: { icon: Sparkles, color: 'text-saathi-600', bg: 'bg-saathi-100', label: t.whatsNew.newScheme },
    deadlineApproaching: { icon: Clock, color: 'text-saffron-600', bg: 'bg-saffron-100', label: t.whatsNew.deadlineApproaching },
    ruleUpdated: { icon: RefreshCw, color: 'text-blue-600', bg: 'bg-blue-100', label: t.whatsNew.ruleUpdated },
    eligibilityChanged: { icon: AlertCircle, color: 'text-saffron-600', bg: 'bg-saffron-100', label: t.whatsNew.eligibilityChanged },
  };

  const handleListenAll = () => {
    setListening(true);
    const fullText = t.whatsNew.cards.map((c) => `${c.title}. ${c.description}`).join('. ');
    speech.speak(fullText);
    setTimeout(() => setListening(false), 3000);
  };

  const handleListenCard = (text: string) => {
    speech.speak(text);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="section-title mb-2">{t.whatsNew.title}</h1>
        <p className="text-lg text-ink-500">{t.whatsNew.subtitle}</p>
      </div>

      {/* Listen to all updates button */}
      <div className="flex justify-center mb-8">
        <button
          onClick={handleListenAll}
          className={`btn-saffron text-lg px-8 ${listening ? 'animate-glow-pulse' : ''}`}
        >
          <Volume2 className="h-6 w-6" />
          {t.whatsNew.listenUpdates}
        </button>
      </div>

      {/* Cards */}
      <div className="grid gap-5 sm:grid-cols-2">
        {t.whatsNew.cards.map((card, index) => {
          const cfg = typeConfig[card.type] || typeConfig.newScheme;
          const Icon = cfg.icon;
          return (
            <div
              key={index}
              className="card-interactive animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${cfg.bg} ${cfg.color}`}>
                  <Icon className="h-3.5 w-3.5" />
                  {cfg.label}
                </span>
                <button
                  onClick={() => handleListenCard(`${card.title}. ${card.description}`)}
                  className="rounded-lg p-2 text-saathi-500 hover:bg-saathi-50 transition-colors"
                  aria-label={t.common.listen}
                >
                  <Volume2 className="h-4 w-4" />
                </button>
              </div>
              <h3 className="font-display text-lg font-bold text-saathi-800 mb-2">{card.title}</h3>
              <p className="text-sm text-ink-600 leading-relaxed mb-3">{card.description}</p>
              <div className="flex items-center gap-1.5 text-xs text-ink-400">
                <Calendar className="h-3.5 w-3.5" />
                {card.date}
              </div>
            </div>
          );
        })}
      </div>

      {/* Character + note */}
      <div className="mt-8 flex flex-col items-center gap-4">
        <SaathiCharacter state={listening ? 'speaking' : 'idle'} size={120} />
        <div className="flex items-start gap-2 rounded-2xl bg-saffron-50 border border-saffron-200 p-4 max-w-lg">
          <AlertCircle className="h-5 w-5 text-saffron-600 shrink-0 mt-0.5" />
          <p className="text-sm text-saffron-800">{t.common.verifyNote}</p>
        </div>
      </div>
    </div>
  );
}
