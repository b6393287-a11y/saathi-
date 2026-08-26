import { Mic, FileText, ShieldCheck, AlertCircle, Volume2, Newspaper, Languages, ArrowRight, PlayCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import type { PageId } from '@/types/navigation';
import { SaathiCharacter } from '@/components/SaathiCharacter';
import { useSpeech } from '@/hooks/useSpeech';
import { useState, useEffect } from 'react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useLanguage();
  const [showWelcome, setShowWelcome] = useState(true);
  const { speak, isSpeaking, charState, setCharState } = useSpeech();

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const playDemo = () => {
    const introLines = [
      t.home.welcomeMessage,
      `${t.features.askSaathi}. ${t.features.askSaathiDesc}`,
      `${t.features.yojana}. ${t.features.yojanaDesc}`,
      `${t.features.scan}. ${t.features.scanDesc}`,
      `${t.features.fee}. ${t.features.feeDesc}`,
      `${t.features.rule}. ${t.features.ruleDesc}`,
    ].join('. ');
    setCharState('welcome');
    speak(introLines);
  };

  const features = [
    { id: 'ask' as PageId, icon: Mic, title: t.features.askSaathi, desc: t.features.askSaathiDesc, color: 'bg-saathi-100 text-saathi-600' },
    { id: 'yojana' as PageId, icon: FileText, title: t.features.yojana, desc: t.features.yojanaDesc, color: 'bg-saffron-100 text-saffron-600' },
    { id: 'scan' as PageId, icon: FileText, title: t.features.scan, desc: t.features.scanDesc, color: 'bg-blue-100 text-blue-600' },
    { id: 'fee' as PageId, icon: ShieldCheck, title: t.features.fee, desc: t.features.feeDesc, color: 'bg-saathi-100 text-saathi-600' },
    { id: 'rule' as PageId, icon: AlertCircle, title: t.features.rule, desc: t.features.ruleDesc, color: 'bg-saffron-100 text-saffron-600' },
    { id: 'whatsNew' as PageId, icon: Newspaper, title: t.features.whatsNew, desc: t.features.whatsNewDesc, color: 'bg-blue-100 text-blue-600' },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-saathi-200/40 blur-3xl" />
          <div className="absolute top-20 right-1/4 h-96 w-96 rounded-full bg-saffron-200/30 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-64 w-64 rounded-full bg-saathi-100/50 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Left: Text content */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-saathi-100 px-4 py-2 text-sm font-semibold text-saathi-700">
                <Languages className="h-4 w-4" />
                {t.home.selectLanguage}: हिन्दी • English • भोजपुरी • अवधी
              </div>

              <h1 className="font-display text-4xl font-bold text-saathi-800 sm:text-5xl lg:text-6xl text-balance">
                {t.home.tagline}
              </h1>

              <p className="text-lg text-ink-600 sm:text-xl max-w-lg mx-auto lg:mx-0">
                {t.home.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => onNavigate('ask')}
                  className="btn-primary text-xl px-8 py-5 group"
                >
                  <Mic className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  {t.home.askButton}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('yojana')}
                  className="btn-secondary text-lg"
                >
                  {t.nav.yojana}
                </button>
              </div>

              {/* Demo button - great for presentations */}
              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={playDemo}
                  disabled={isSpeaking}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-saathi-300 bg-white px-5 py-2.5 text-sm font-semibold text-saathi-700 shadow-soft hover:bg-saathi-50 transition-colors disabled:opacity-60"
                >
                  <PlayCircle className="h-5 w-5" />
                  {isSpeaking ? 'Saathi is speaking…' : 'Play Demo Intro'}
                </button>
              </div>

              {/* Trust note */}
              <div className="flex items-start gap-2 rounded-2xl bg-saffron-50 border border-saffron-200 p-3 text-sm text-saffron-800 max-w-lg mx-auto lg:mx-0">
                <ShieldCheck className="h-5 w-5 shrink-0 mt-0.5" />
                <p>{t.home.trustNote}</p>
              </div>
            </div>

            {/* Right: SAATHI Character */}
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="relative">
                <SaathiCharacter state={isSpeaking ? charState : showWelcome ? 'welcome' : 'idle'} size={280} />
              </div>
              <div className="rounded-2xl bg-white/80 backdrop-blur-sm px-6 py-3 shadow-soft border border-saathi-100 max-w-sm text-center">
                <p className="text-base font-medium text-ink-700">
                  {isSpeaking ? t.home.welcomeMessage : showWelcome ? t.home.welcomeMessage : t.home.heroGreeting}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-10">
          <h2 className="section-title mb-3">{t.home.featuresTitle}</h2>
          <p className="text-lg text-ink-500 max-w-2xl mx-auto">{t.home.featuresSubtitle}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <button
                key={feature.id}
                onClick={() => onNavigate(feature.id)}
                className="card-interactive text-left p-6 group animate-fade-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-saathi-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-ink-500 text-sm leading-relaxed">{feature.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-saathi-600 group-hover:gap-2 transition-all">
                  {t.common.listen} <ArrowRight className="h-4 w-4" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Local Language Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl bg-gradient-to-br from-saathi-600 to-saathi-800 p-8 sm:p-12 text-white">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
                <Languages className="h-4 w-4" />
                {t.localLang.title}
              </div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                {t.localLang.subtitle}
              </h2>
              <div className="space-y-3">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-sm text-saathi-200 mb-1">{t.localLang.userSays}</p>
                  <p className="text-lg font-medium">"{t.localLang.userSaysText}"</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-sm text-saathi-200 mb-1">{t.localLang.saathiUnderstands}</p>
                  <p className="text-base">{t.localLang.saathiResponse}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <SaathiCharacter state="speaking" size={200} />
              <div className="rounded-2xl bg-white/15 backdrop-blur-sm p-4 text-center max-w-xs">
                <Volume2 className="h-6 w-6 mx-auto mb-2 text-saffron-300" />
                <p className="font-semibold">{t.localLang.notJustTranslation}</p>
                <p className="text-sm text-saathi-200 mt-1">{t.localLang.notJustTranslationDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
