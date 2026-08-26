import { useState, useRef, useEffect } from 'react';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { LANGUAGES, type LanguageCode } from '@/i18n/translations';
import type { PageId } from '@/types/navigation';
import { SaathiCharacter } from '@/components/SaathiCharacter';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const { lang, setLang, t } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'ask', label: t.nav.ask },
    { id: 'yojana', label: t.nav.yojana },
    { id: 'scan', label: t.nav.scan },
    { id: 'fee', label: t.nav.fee },
    { id: 'rule', label: t.nav.rule },
    { id: 'whatsNew', label: t.nav.whatsNew },
    { id: 'safety', label: t.nav.safety },
  ];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = LANGUAGES.find((l) => l.code === lang)!;

  const handleLangChange = (code: LanguageCode) => {
    setLang(code);
    setLangOpen(false);
  };

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-saathi-100 shadow-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 shrink-0 transition-transform hover:scale-[1.02]"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <SaathiCharacter state="idle" size={40} showSoundWaves={false} />
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="font-display text-xl font-bold text-saathi-700">SAATHI</span>
              <span className="text-[10px] text-ink-400 font-medium hidden sm:block">साथी</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`nav-link ${currentPage === item.id ? 'nav-link-active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right side: Language selector + Mobile menu */}
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 rounded-xl border-2 border-saathi-200 bg-white px-3 py-2 text-sm font-semibold text-saathi-700 transition-all hover:bg-saathi-50 hover:border-saathi-300"
              >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">{currentLang.nativeLabel}</span>
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-2xl border border-saathi-100 bg-white p-2 shadow-card animate-fade-up">
                  <p className="px-3 py-1.5 text-xs font-semibold text-ink-400 uppercase tracking-wide">
                    {t.home.selectLanguage}
                  </p>
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => handleLangChange(l.code)}
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-all ${
                        lang === l.code
                          ? 'bg-saathi-100 text-saathi-700'
                          : 'text-ink-600 hover:bg-saathi-50'
                      }`}
                    >
                      <span className="text-base">{l.flag}</span>
                      <div className="flex flex-col leading-tight">
                        <span>{l.nativeLabel}</span>
                        <span className="text-xs text-ink-400">{l.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden rounded-xl border-2 border-saathi-200 bg-white p-2 text-saathi-700 transition-all hover:bg-saathi-50"
              aria-label="Menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="lg:hidden pb-4 animate-fade-up">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-link text-left ${currentPage === item.id ? 'nav-link-active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
