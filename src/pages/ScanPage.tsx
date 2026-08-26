import { useState, useRef, useCallback } from 'react';
import { Upload, Camera, ScanLine, Volume2, FileText, Calendar, CheckSquare, ListChecks, Loader2, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useSpeech } from '@/hooks/useSpeech';
import { SaathiCharacter } from '@/components/SaathiCharacter';

export function ScanPage() {
  const { t } = useLanguage();
  const speech = useSpeech();
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const startAnalysis = useCallback(() => {
    setAnalyzing(true);
    setShowResults(false);
    setAnalysisStep(0);
    speech.setCharState('thinking');

    let step = 0;
    const interval = setInterval(() => {
      step++;
      setAnalysisStep(step);
      if (step >= t.scan.analyzingSteps.length) {
        clearInterval(interval);
        setAnalyzing(false);
        setShowResults(true);
        speech.setCharState('success');
      }
    }, 800);
  }, [t.scan.analyzingSteps.length, speech]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setUploadedImage(ev.target?.result as string);
        startAnalysis();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleListen = () => {
    const fullText = `${t.scan.explanationText} ${t.scan.whatToDo}. ${t.scan.steps.join('. ')}`;
    speech.speak(fullText);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="section-title mb-2">{t.scan.title}</h1>
        <p className="text-lg text-ink-500">{t.scan.subtitle}</p>
      </div>

      {/* Upload area */}
      {!showResults && !analyzing && (
        <div className="card mb-6">
          <div
            onClick={() => fileInputRef.current?.click()}
            className="flex flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-saathi-300 bg-saathi-50 p-12 cursor-pointer transition-all hover:border-saathi-500 hover:bg-saathi-100"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-saathi-200">
              <Upload className="h-10 w-10 text-saathi-600" />
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-saathi-700">{t.scan.dragDrop}</p>
              <p className="text-sm text-ink-400 mt-1">{t.scan.or}</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
                className="btn-secondary text-base"
              >
                <ImageIcon className="h-5 w-5" />
                {t.scan.uploadDoc}
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); startAnalysis(); }}
                className="btn-primary text-base"
              >
                <ScanLine className="h-5 w-5" />
                {t.scan.scanNotice}
              </button>
            </div>
            <p className="text-xs text-ink-400 max-w-md text-center">{t.scan.sampleDocNote}</p>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>
      )}

      {/* Analyzing state */}
      {analyzing && (
        <div className="card flex flex-col items-center justify-center py-16 animate-fade-in">
          <SaathiCharacter state="thinking" size={180} />
          <p className="mt-6 text-xl font-bold text-saathi-700">{t.scan.analyzing}</p>
          <div className="mt-4 space-y-2 w-full max-w-md">
            {t.scan.analyzingSteps.map((step, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 rounded-xl px-4 py-2.5 transition-all ${
                  i < analysisStep
                    ? 'bg-saathi-50 text-saathi-700'
                    : i === analysisStep
                    ? 'bg-saffron-50 text-saffron-700'
                    : 'bg-ink-50 text-ink-300'
                }`}
              >
                {i < analysisStep ? (
                  <CheckSquare className="h-5 w-5 shrink-0" />
                ) : i === analysisStep ? (
                  <Loader2 className="h-5 w-5 shrink-0 animate-spin" />
                ) : (
                  <div className="h-5 w-5 shrink-0 rounded-full border-2 border-ink-200" />
                )}
                <span className="text-sm font-medium">{step}</span>
              </div>
            ))}
          </div>
          {uploadedImage && (
            <div className="mt-6 rounded-2xl overflow-hidden border-2 border-saathi-200 max-w-xs">
              <img src={uploadedImage} alt="Uploaded" className="w-full h-40 object-cover" />
            </div>
          )}
        </div>
      )}

      {/* Results */}
      {showResults && (
        <div className="space-y-4 animate-fade-up">
          {/* Success header */}
          <div className="card flex items-center gap-4">
            <SaathiCharacter state="success" size={60} showSoundWaves={false} />
            <div>
              <h2 className="font-display text-xl font-bold text-saathi-800">{t.scan.simpleExplanation}</h2>
              <p className="text-sm text-ink-400">{t.yojana.lastChecked}: 26 अगस्त 2025</p>
            </div>
          </div>

          {/* Simple Explanation */}
          <div className="card">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="h-5 w-5 text-saathi-600" />
              <h3 className="font-display text-lg font-bold text-saathi-800">{t.scan.simpleExplanation}</h3>
            </div>
            <p className="text-ink-700 leading-relaxed text-base">{t.scan.explanationText}</p>
          </div>

          {/* Important Dates */}
          <div className="card">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="h-5 w-5 text-saffron-600" />
              <h3 className="font-display text-lg font-bold text-saathi-800">{t.scan.importantDates}</h3>
            </div>
            <div className="rounded-xl bg-saffron-50 p-3">
              <p className="text-ink-700 font-medium">{t.scan.lastDate}</p>
            </div>
          </div>

          {/* What to do */}
          <div className="card">
            <div className="flex items-center gap-2 mb-3">
              <ListChecks className="h-5 w-5 text-saathi-600" />
              <h3 className="font-display text-lg font-bold text-saathi-800">{t.scan.whatToDo}</h3>
            </div>
            <ol className="space-y-3">
              {t.scan.steps.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-saathi-100 text-sm font-bold text-saathi-700">
                    {i + 1}
                  </span>
                  <p className="text-ink-700 pt-0.5">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Documents Required */}
          <div className="card">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="h-5 w-5 text-ink-600" />
              <h3 className="font-display text-lg font-bold text-saathi-800">{t.scan.documentsRequired}</h3>
            </div>
            <ul className="space-y-2">
              {t.scan.docList.map((doc, i) => (
                <li key={i} className="flex items-center gap-2 text-ink-700">
                  <CheckSquare className="h-4 w-4 text-saathi-500 shrink-0" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>

          {/* Listen button */}
          <button
            onClick={handleListen}
            className="btn-saffron w-full text-xl py-6"
          >
            <Volume2 className="h-6 w-6" />
            {t.scan.listenExplanation}
          </button>

          {/* Verify note */}
          <div className="flex items-start gap-2 rounded-2xl bg-saffron-50 border border-saffron-200 p-4">
            <FileText className="h-5 w-5 text-saffron-600 shrink-0 mt-0.5" />
            <p className="text-sm text-saffron-800">{t.common.verifyNote}</p>
          </div>
        </div>
      )}
    </div>
  );
}
