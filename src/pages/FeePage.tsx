import { useState, useCallback } from 'react';
import { ShieldCheck, AlertCircle, AlertTriangle, Receipt, Search, Loader2, Phone, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SaathiCharacter } from '@/components/SaathiCharacter';

type FeeResult = 'official' | 'verification' | 'mismatch' | null;

export function FeePage() {
  const { t } = useLanguage();
  const [serviceName, setServiceName] = useState('');
  const [department, setDepartment] = useState('');
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');
  const [receipt, setReceipt] = useState('');
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState<FeeResult>(null);

  const handleCheck = useCallback(() => {
    setChecking(true);
    setResult(null);

    setTimeout(() => {
      setChecking(false);
      const amt = parseInt(amount) || 0;
      let res: FeeResult = 'official';

      if (receipt === 'no') {
        res = amt > 1000 ? 'mismatch' : 'verification';
      } else {
        if (amt > 2000) res = 'verification';
        else if (amt > 5000) res = 'mismatch';
        else res = 'official';
      }

      setResult(res);
    }, 2200);
  }, [amount, receipt]);

  const canCheck = serviceName && department && amount && receipt;

  const renderResult = () => {
    if (!result) return null;

    const config = {
      official: {
        icon: ShieldCheck,
        charState: 'success' as const,
        bg: 'bg-saathi-50 border-saathi-200',
        iconColor: 'text-saathi-600',
        titleColor: 'text-saathi-700',
        title: t.fee.resultOfficial,
        desc: t.fee.resultOfficialDesc,
      },
      verification: {
        icon: AlertCircle,
        charState: 'warning' as const,
        bg: 'bg-saffron-50 border-saffron-200',
        iconColor: 'text-saffron-600',
        titleColor: 'text-saffron-700',
        title: t.fee.resultVerification,
        desc: t.fee.resultVerificationDesc,
      },
      mismatch: {
        icon: AlertTriangle,
        charState: 'warning' as const,
        bg: 'bg-red-50 border-red-200',
        iconColor: 'text-red-600',
        titleColor: 'text-red-700',
        title: t.fee.resultMismatch,
        desc: t.fee.resultMismatchDesc,
      },
    };

    const cfg = config[result];
    const Icon = cfg.icon;

    return (
      <div className={`rounded-3xl border-2 p-6 animate-fade-up ${cfg.bg}`}>
        <div className="flex flex-col items-center text-center gap-4">
          <SaathiCharacter state={cfg.charState} size={120} />
          <div className="flex items-center gap-2">
            <Icon className={`h-8 w-8 ${cfg.iconColor}`} />
            <h3 className={`font-display text-2xl font-bold ${cfg.titleColor}`}>{cfg.title}</h3>
          </div>
          <p className="text-ink-700 max-w-lg leading-relaxed">{cfg.desc}</p>
          <button className="btn-secondary text-base mt-2">
            <Phone className="h-5 w-5" />
            {t.fee.findOfficialHelp}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="section-title mb-2">{t.fee.title}</h1>
        <p className="text-lg text-ink-500">{t.fee.subtitle}</p>
      </div>

      {/* Example */}
      <div className="card mb-6 bg-saffron-50 border-saffron-200">
        <div className="flex items-start gap-3">
          <HelpCircle className="h-5 w-5 text-saffron-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-saffron-800 mb-1">{t.fee.exampleTitle}</p>
            <p className="text-saffron-700">"{t.fee.exampleText}"</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="card mb-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-base font-semibold text-ink-700 mb-2">{t.fee.serviceName}</label>
            <input
              type="text"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              placeholder={t.fee.serviceNamePlaceholder}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-ink-700 mb-2">{t.fee.department}</label>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder={t.fee.departmentPlaceholder}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-ink-700 mb-2">{t.fee.amount}</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder={t.fee.amountPlaceholder}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-ink-700 mb-2">{t.fee.reason}</label>
            <input
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder={t.fee.reasonPlaceholder}
              className="input-field"
            />
          </div>
        </div>

        {/* Receipt */}
        <div className="mt-5">
          <label className="flex items-center gap-2 text-base font-semibold text-ink-700 mb-2">
            <Receipt className="h-5 w-5 text-saathi-600" />
            {t.fee.receiptOffered}
          </label>
          <div className="flex gap-3">
            <button
              onClick={() => setReceipt('yes')}
              className={`flex-1 rounded-2xl border-2 px-4 py-3 text-base font-semibold transition-all ${
                receipt === 'yes'
                  ? 'border-saathi-500 bg-saathi-50 text-saathi-700'
                  : 'border-saathi-200 bg-white text-ink-500 hover:border-saathi-300'
              }`}
            >
              {t.fee.receiptYes}
            </button>
            <button
              onClick={() => setReceipt('no')}
              className={`flex-1 rounded-2xl border-2 px-4 py-3 text-base font-semibold transition-all ${
                receipt === 'no'
                  ? 'border-saffron-500 bg-saffron-50 text-saffron-700'
                  : 'border-saathi-200 bg-white text-ink-500 hover:border-saathi-300'
              }`}
            >
              {t.fee.receiptNo}
            </button>
          </div>
        </div>

        {/* Check button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleCheck}
            disabled={!canCheck || checking}
            className="btn-primary text-lg px-8"
          >
            {checking ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                {t.fee.checking}
              </>
            ) : (
              <>
                <Search className="h-5 w-5" />
                {t.fee.checkButton}
              </>
            )}
          </button>
        </div>
      </div>

      {/* Checking animation */}
      {checking && (
        <div className="flex flex-col items-center py-8 animate-fade-in">
          <SaathiCharacter state="thinking" size={140} />
          <p className="mt-4 text-lg font-semibold text-ink-600">{t.fee.checking}</p>
        </div>
      )}

      {/* Result */}
      {result && !checking && renderResult()}

      {/* Official fee info note */}
      {result && !checking && (
        <div className="mt-4 card">
          <p className="text-sm font-semibold text-ink-600 mb-2">{t.fee.officialFeeInfo}</p>
          <div className="space-y-2 text-sm text-ink-500">
            <div className="flex justify-between rounded-lg bg-saathi-50 px-3 py-2">
              <span>Income Certificate</span>
              <span className="font-semibold text-saathi-700">₹20-50</span>
            </div>
            <div className="flex justify-between rounded-lg bg-saathi-50 px-3 py-2">
              <span>Caste Certificate</span>
              <span className="font-semibold text-saathi-700">₹10-30</span>
            </div>
            <div className="flex justify-between rounded-lg bg-saathi-50 px-3 py-2">
              <span>Land Records (Khatauni)</span>
              <span className="font-semibold text-saathi-700">₹15-50</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
