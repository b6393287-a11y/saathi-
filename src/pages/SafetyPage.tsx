import { ShieldCheck, CheckCircle2, AlertCircle, FileText, Clock, Eye, Scale, Heart } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SaathiCharacter } from '@/components/SaathiCharacter';

export function SafetyPage() {
  const { t } = useLanguage();

  const pointIcons = [ShieldCheck, FileText, Clock, Eye, Scale, CheckCircle2];

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="section-title mb-2">{t.safety.title}</h1>
        <p className="text-lg text-ink-500">{t.safety.subtitle}</p>
      </div>

      {/* Character */}
      <div className="flex justify-center mb-8">
        <SaathiCharacter state="success" size={160} />
      </div>

      {/* Trust points */}
      <div className="grid gap-4 sm:grid-cols-2 mb-8">
        {t.safety.points.map((point, i) => {
          const Icon = pointIcons[i % pointIcons.length];
          return (
            <div
              key={i}
              className="card flex items-start gap-3 animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-saathi-100">
                <Icon className="h-5 w-5 text-saathi-600" />
              </div>
              <p className="text-ink-700 pt-1.5 leading-relaxed">{point}</p>
            </div>
          );
        })}
      </div>

      {/* Status badges explanation */}
      <div className="card mb-6">
        <h2 className="font-display text-xl font-bold text-saathi-800 mb-4">{t.rule.verificationStatus}</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-xl bg-saathi-50 p-3">
            <span className="status-badge bg-saathi-100 text-saathi-700">
              <CheckCircle2 className="h-4 w-4" />
              {t.yojana.officiallyVerified}
            </span>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-saffron-50 p-3">
            <span className="status-badge bg-saffron-100 text-saffron-700">
              <AlertCircle className="h-4 w-4" />
              {t.yojana.needsVerification}
            </span>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-red-50 p-3">
            <span className="status-badge bg-red-100 text-red-700">
              <AlertCircle className="h-4 w-4" />
              {t.yojana.doesntMatch}
            </span>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="rounded-3xl bg-gradient-to-br from-saathi-700 to-saathi-900 p-8 text-white text-center">
        <Scale className="h-10 w-10 mx-auto mb-4 text-saffron-300" />
        <p className="text-lg leading-relaxed max-w-2xl mx-auto">{t.safety.disclaimer}</p>
      </div>

      {/* Footer line */}
      <div className="mt-8 text-center">
        <p className="font-display text-3xl font-bold text-saffron-500">
          {t.safety.footerLine}
        </p>
        <p className="mt-2 text-sm text-ink-400 flex items-center justify-center gap-1">
          Made with <Heart className="h-3 w-3 fill-saffron-400 text-saffron-400" /> for India
        </p>
      </div>
    </div>
  );
}
