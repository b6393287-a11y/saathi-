import { ShieldCheck, BookOpen, Mic, FileText, AlertCircle, Heart } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import type { PageId } from '@/types/navigation';
import { SaathiCharacter } from '@/components/SaathiCharacter';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { t } = useLanguage();

  const links: { id: PageId; label: string }[] = [
    { id: 'ask', label: t.nav.ask },
    { id: 'yojana', label: t.nav.yojana },
    { id: 'scan', label: t.nav.scan },
    { id: 'fee', label: t.nav.fee },
    { id: 'rule', label: t.nav.rule },
    { id: 'whatsNew', label: t.nav.whatsNew },
    { id: 'safety', label: t.nav.safety },
  ];

  return (
    <footer className="mt-20 bg-saathi-800 text-saathi-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <SaathiCharacter state="idle" size={48} showSoundWaves={false} />
              <div>
                <h3 className="font-display text-2xl font-bold">SAATHI</h3>
                <p className="text-sm text-saathi-200">{t.home.tagline}</p>
              </div>
            </div>
            <p className="text-sm text-saathi-200 max-w-xs">{t.home.description}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-saathi-100 mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-sm text-saathi-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust badges */}
          <div>
            <h4 className="font-semibold text-saathi-100 mb-3">Features</h4>
            <ul className="space-y-2 text-sm text-saathi-200">
              <li className="flex items-center gap-2"><Mic className="h-4 w-4 shrink-0" /> {t.features.askSaathi}</li>
              <li className="flex items-center gap-2"><FileText className="h-4 w-4 shrink-0" /> {t.features.yojana}</li>
              <li className="flex items-center gap-2"><BookOpen className="h-4 w-4 shrink-0" /> {t.features.scan}</li>
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 shrink-0" /> {t.features.fee}</li>
              <li className="flex items-center gap-2"><AlertCircle className="h-4 w-4 shrink-0" /> {t.features.rule}</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 rounded-2xl bg-saathi-900/50 p-4">
          <p className="text-sm text-saathi-200">{t.safety.disclaimer}</p>
        </div>

        {/* Footer line */}
        <div className="mt-8 flex flex-col items-center gap-2 border-t border-saathi-700 pt-6">
          <p className="font-display text-xl font-bold text-saffron-300 text-center">
            {t.safety.footerLine}
          </p>
          <p className="text-xs text-saathi-300 flex items-center gap-1">
            Made with <Heart className="h-3 w-3 fill-saffron-400 text-saffron-400" /> for India
          </p>
          <p className="text-xs text-saathi-300">
            Created by <span className="font-semibold text-saffron-300">Bhakti Verma</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
