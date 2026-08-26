import { useState, useCallback } from 'react';
import { Search, CheckCircle2, AlertCircle, AlertTriangle, Loader2, FileText, ExternalLink, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SaathiCharacter } from '@/components/SaathiCharacter';

interface RuleResult {
  claim: string;
  info: string;
  status: 'green' | 'yellow' | 'red';
  source: string;
}

export function RulePage() {
  const { t } = useLanguage();
  const [input, setInput] = useState('');
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState<RuleResult | null>(null);

  const handleCheck = useCallback(() => {
    if (!input.trim()) return;
    setChecking(true);
    setResult(null);

    setTimeout(() => {
      setChecking(false);
      // Find best matching sample claim or use default
      const lower = input.toLowerCase();
      let matched = t.rule.sampleClaims.find((c) => {
        const claimLower = c.claim.toLowerCase();
        const keywords = claimLower.split(' ').filter((w) => w.length > 3);
        return keywords.some((kw) => lower.includes(kw));
      });

      if (!matched) {
        matched = t.rule.sampleClaims[0];
      }

      setResult({ ...matched, claim: input });
    }, 2000);
  }, [input, t.rule.sampleClaims]);

  const statusBadge = (status: 'green' | 'yellow' | 'red') => {
    if (status === 'green') {
      return (
        <span className="status-badge bg-saathi-100 text-saathi-700">
          <CheckCircle2 className="h-5 w-5" />
          {t.rule.verified}
        </span>
      );
    }
    if (status === 'yellow') {
      return (
        <span className="status-badge bg-saffron-100 text-saffron-700">
          <AlertCircle className="h-5 w-5" />
          {t.rule.needsVerification}
        </span>
      );
    }
    return (
      <span className="status-badge bg-red-100 text-red-700">
        <AlertTriangle className="h-5 w-5" />
        {t.rule.doesntMatch}
      </span>
    );
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="section-title mb-2">{t.rule.title}</h1>
        <p className="text-lg text-ink-500">{t.rule.subtitle}</p>
      </div>

      {/* Example */}
      <div className="card mb-6 bg-saffron-50 border-saffron-200">
        <div className="flex items-start gap-3">
          <HelpCircle className="h-5 w-5 text-saffron-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-saffron-800 mb-1">{t.rule.exampleTitle}</p>
            <p className="text-saffron-700">"{t.rule.exampleClaim}"</p>
          </div>
        </div>
      </div>

      {/* Search input */}
      <div className="card mb-6">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t.rule.placeholder}
          rows={4}
          className="input-field resize-none text-base"
        />
        <div className="mt-4 flex justify-center">
          <button
            onClick={handleCheck}
            disabled={!input.trim() || checking}
            className="btn-primary text-lg px-8"
          >
            {checking ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                {t.rule.checking}
              </>
            ) : (
              <>
                <Search className="h-5 w-5" />
                {t.rule.checkButton}
              </>
            )}
          </button>
        </div>
      </div>

      {/* Checking animation */}
      {checking && (
        <div className="flex flex-col items-center py-8 animate-fade-in">
          <SaathiCharacter state="thinking" size={140} />
          <p className="mt-4 text-lg font-semibold text-ink-600">{t.rule.checking}</p>
        </div>
      )}

      {/* Result */}
      {result && !checking && (
        <div className="space-y-4 animate-fade-up">
          <div className="card">
            {/* Claim */}
            <div className="mb-4">
              <p className="flex items-center gap-2 text-sm font-semibold text-ink-500 mb-1">
                <FileText className="h-4 w-4" />
                {t.rule.claim}
              </p>
              <p className="text-lg text-ink-800 font-medium rounded-xl bg-ink-50 p-3">"{result.claim}"</p>
            </div>

            {/* Status */}
            <div className="mb-4">
              <p className="text-sm font-semibold text-ink-500 mb-2">{t.rule.verificationStatus}</p>
              {statusBadge(result.status)}
            </div>

            {/* Official info */}
            <div className="mb-4">
              <p className="flex items-center gap-2 text-sm font-semibold text-saathi-700 mb-1">
                <CheckCircle2 className="h-4 w-4" />
                {t.rule.officialInfo}
              </p>
              <p className="text-ink-700 leading-relaxed rounded-xl bg-saathi-50 p-3">{result.info}</p>
            </div>

            {/* Source + Date */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-saffron-50 p-3">
                <p className="flex items-center gap-1.5 text-xs font-semibold text-saffron-700 mb-1">
                  <ExternalLink className="h-3.5 w-3.5" />
                  {t.rule.source}
                </p>
                <p className="text-sm text-ink-700">{result.source}</p>
              </div>
              <div className="rounded-xl bg-ink-50 p-3">
                <p className="text-xs font-semibold text-ink-500 mb-1">{t.rule.lastChecked}</p>
                <p className="text-sm text-ink-700">26 अगस्त 2025</p>
              </div>
            </div>
          </div>

          {/* Verify note */}
          <div className="flex items-start gap-2 rounded-2xl bg-saffron-50 border border-saffron-200 p-4">
            <AlertCircle className="h-5 w-5 text-saffron-600 shrink-0 mt-0.5" />
            <p className="text-sm text-saffron-800">{t.common.verifyNote}</p>
          </div>
        </div>
      )}

      {/* Sample claims for quick try */}
      {!result && !checking && (
        <div className="card">
          <p className="text-sm font-semibold text-ink-600 mb-3">{t.voice.trySaying}</p>
          <div className="space-y-2">
            {t.rule.sampleClaims.map((claim, i) => (
              <button
                key={i}
                onClick={() => setInput(claim.claim)}
                className="block w-full text-left rounded-xl bg-saathi-50 px-3 py-2.5 text-sm text-ink-700 hover:bg-saathi-100 transition-colors"
              >
                "{claim.claim}"
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
