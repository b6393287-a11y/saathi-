import { useState } from 'react';
import { MapPin, Tractor, Calendar, HelpCircle, Search, CheckCircle2, AlertCircle, AlertTriangle, FileText, Clock, Award, Users, FolderOpen } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SaathiCharacter } from '@/components/SaathiCharacter';

const indianStates = [
  'उत्तर प्रदेश', 'बिहार', 'महाराष्ट्र', 'पश्चिम बंगाल', 'तमिलनाडु', 'तेलंगाना',
  'मध्य प्रदेश', 'राजस्थान', 'कर्नाटक', 'गुजरात', 'पंजाब', 'हरियाणा',
  'झारखंड', 'ओडिशा', 'छत्तीसगढ़', 'केरल', 'आंध्र प्रदेश', 'असम',
];

export function YojanaPage() {
  const { t } = useLanguage();
  const [state, setState] = useState('');
  const [isFarmer, setIsFarmer] = useState('');
  const [age, setAge] = useState('');
  const [helpCategory, setHelpCategory] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [hasResults, setHasResults] = useState(false);

  const categoryKeys = Object.keys(t.yojana.categories);

  const handleSearch = () => {
    setIsSearching(true);
    setHasResults(false);
    setTimeout(() => {
      setIsSearching(false);
      setHasResults(true);
    }, 2500);
  };

  const canSearch = state && isFarmer && age && helpCategory;

  const filteredSchemes = hasResults
    ? t.yojana.schemes.filter((s) => {
        if (helpCategory && s.category !== helpCategory) return false;
        if (isFarmer === 'no' && s.category === 'agriculture') return false;
        return true;
      })
    : [];

  const verifiedBadge = (status: 'green' | 'yellow' | 'red') => {
    if (status === 'green') {
      return (
        <span className="status-badge bg-saathi-100 text-saathi-700">
          <CheckCircle2 className="h-4 w-4" />
          {t.yojana.officiallyVerified}
        </span>
      );
    }
    if (status === 'yellow') {
      return (
        <span className="status-badge bg-saffron-100 text-saffron-700">
          <AlertCircle className="h-4 w-4" />
          {t.yojana.needsVerification}
        </span>
      );
    }
    return (
      <span className="status-badge bg-red-100 text-red-700">
        <AlertTriangle className="h-4 w-4" />
        {t.yojana.doesntMatch}
      </span>
    );
  };

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="section-title mb-2">{t.yojana.title}</h1>
        <p className="text-lg text-ink-500">{t.yojana.subtitle}</p>
      </div>

      {/* Questions form */}
      <div className="card mb-8">
        <div className="grid gap-6 md:grid-cols-2">
          {/* State */}
          <div>
            <label className="flex items-center gap-2 text-base font-semibold text-ink-700 mb-2">
              <MapPin className="h-5 w-5 text-saathi-600" />
              {t.yojana.selectState}
            </label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="input-field cursor-pointer"
            >
              <option value="">-- {t.yojana.selectState} --</option>
              {indianStates.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Age */}
          <div>
            <label className="flex items-center gap-2 text-base font-semibold text-ink-700 mb-2">
              <Calendar className="h-5 w-5 text-saathi-600" />
              {t.yojana.selectAge}
            </label>
            <select
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="input-field cursor-pointer"
            >
              <option value="">{t.yojana.selectAgePlaceholder}</option>
              <option value="18-30">18-30</option>
              <option value="30-45">30-45</option>
              <option value="45-60">45-60</option>
              <option value="60+">60+</option>
            </select>
          </div>

          {/* Farmer */}
          <div>
            <label className="flex items-center gap-2 text-base font-semibold text-ink-700 mb-2">
              <Tractor className="h-5 w-5 text-saathi-600" />
              {t.yojana.isFarmer}
            </label>
            <div className="flex gap-3">
              <button
                onClick={() => setIsFarmer('yes')}
                className={`flex-1 rounded-2xl border-2 px-4 py-3 text-base font-semibold transition-all ${
                  isFarmer === 'yes'
                    ? 'border-saathi-500 bg-saathi-50 text-saathi-700'
                    : 'border-saathi-200 bg-white text-ink-500 hover:border-saathi-300'
                }`}
              >
                {t.yojana.yes}
              </button>
              <button
                onClick={() => setIsFarmer('no')}
                className={`flex-1 rounded-2xl border-2 px-4 py-3 text-base font-semibold transition-all ${
                  isFarmer === 'no'
                    ? 'border-saathi-500 bg-saathi-50 text-saathi-700'
                    : 'border-saathi-200 bg-white text-ink-500 hover:border-saathi-300'
                }`}
              >
                {t.yojana.no}
              </button>
            </div>
          </div>

          {/* Help category */}
          <div>
            <label className="flex items-center gap-2 text-base font-semibold text-ink-700 mb-2">
              <HelpCircle className="h-5 w-5 text-saathi-600" />
              {t.yojana.whatHelp}
            </label>
            <select
              value={helpCategory}
              onChange={(e) => setHelpCategory(e.target.value)}
              className="input-field cursor-pointer"
            >
              <option value="">-- {t.yojana.whatHelp} --</option>
              {categoryKeys.map((key) => (
                <option key={key} value={key}>
                  {t.yojana.categories[key]}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleSearch}
            disabled={!canSearch || isSearching}
            className="btn-primary text-lg px-8"
          >
            {isSearching ? (
              <>
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                {t.yojana.findingSchemes}
              </>
            ) : (
              <>
                <Search className="h-5 w-5" />
                {t.yojana.findSchemes}
              </>
            )}
          </button>
        </div>
      </div>

      {/* Searching animation */}
      {isSearching && (
        <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
          <SaathiCharacter state="thinking" size={160} />
          <p className="mt-4 text-lg font-semibold text-ink-600">{t.yojana.findingSchemes}</p>
        </div>
      )}

      {/* Results */}
      {hasResults && !isSearching && (
        <div className="space-y-4 animate-fade-up">
          <div className="flex items-center gap-3">
            <h2 className="font-display text-2xl font-bold text-saathi-800">
              {filteredSchemes.length} {t.yojana.resultsFound}
            </h2>
            <SaathiCharacter state="success" size={50} showSoundWaves={false} />
          </div>

          {filteredSchemes.length === 0 ? (
            <div className="card text-center py-12">
              <AlertCircle className="h-12 w-12 mx-auto mb-4 text-saffron-500" />
              <p className="text-lg text-ink-600">{t.yojana.noResults}</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredSchemes.map((scheme, index) => (
                <div
                  key={index}
                  className="card animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-saathi-100 px-3 py-1 text-xs font-semibold text-saathi-700 mb-2">
                        <FolderOpen className="h-3.5 w-3.5" />
                        {t.yojana.categories[scheme.category]}
                      </span>
                      <h3 className="font-display text-xl font-bold text-saathi-800">
                        {scheme.name}
                      </h3>
                    </div>
                    {verifiedBadge(scheme.verified)}
                  </div>

                  {/* Simple Explanation */}
                  <div className="mb-4 rounded-2xl bg-saathi-50 p-4">
                    <p className="flex items-center gap-2 text-sm font-semibold text-saathi-700 mb-1">
                      <FileText className="h-4 w-4" />
                      {t.yojana.simpleExplanation}
                    </p>
                    <p className="text-ink-700 leading-relaxed">{scheme.explanation}</p>
                  </div>

                  {/* Details grid */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl bg-saffron-50 p-3">
                      <p className="flex items-center gap-1.5 text-xs font-semibold text-saffron-700 mb-1">
                        <Users className="h-3.5 w-3.5" />
                        {t.yojana.whoCanApply}
                      </p>
                      <p className="text-sm text-ink-700">{scheme.whoCanApply}</p>
                    </div>
                    <div className="rounded-xl bg-saathi-50 p-3">
                      <p className="flex items-center gap-1.5 text-xs font-semibold text-saathi-700 mb-1">
                        <Award className="h-3.5 w-3.5" />
                        {t.yojana.benefits}
                      </p>
                      <p className="text-sm text-ink-700">{scheme.benefits}</p>
                    </div>
                  </div>

                  {/* Documents */}
                  <div className="mt-3 rounded-xl bg-ink-50 p-3">
                    <p className="flex items-center gap-1.5 text-xs font-semibold text-ink-600 mb-2">
                      <FileText className="h-3.5 w-3.5" />
                      {t.yojana.documentsRequired}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {scheme.documents.map((doc, i) => (
                        <span key={i} className="rounded-lg bg-white px-2.5 py-1 text-xs text-ink-600 border border-ink-200">
                          {doc}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer: Deadline + Last checked + Official button */}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-saathi-100 pt-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5 text-sm text-ink-500">
                        <Clock className="h-4 w-4" />
                        {t.yojana.deadline}: <strong className="text-ink-700">{scheme.deadline}</strong>
                      </span>
                      <span className="text-xs text-ink-400">
                        {t.yojana.lastChecked}: 25 अगस्त 2025
                      </span>
                    </div>
                    <button className="btn-secondary text-sm px-4 py-2.5">
                      <FileText className="h-4 w-4" />
                      {t.yojana.officialInfo}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Verify note */}
          <div className="flex items-start gap-2 rounded-2xl bg-saffron-50 border border-saffron-200 p-4">
            <AlertCircle className="h-5 w-5 text-saffron-600 shrink-0 mt-0.5" />
            <p className="text-sm text-saffron-800">{t.common.verifyNote}</p>
          </div>
        </div>
      )}
    </div>
  );
}
