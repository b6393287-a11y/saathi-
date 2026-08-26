import { useState, useEffect } from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { AskPage } from '@/pages/AskPage';
import { YojanaPage } from '@/pages/YojanaPage';
import { ScanPage } from '@/pages/ScanPage';
import { FeePage } from '@/pages/FeePage';
import { RulePage } from '@/pages/RulePage';
import { WhatsNewPage } from '@/pages/WhatsNewPage';
import { SafetyPage } from '@/pages/SafetyPage';
import type { PageId } from '@/types/navigation';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [transitioning, setTransitioning] = useState(false);

  const handleNavigate = (page: PageId) => {
    if (page === currentPage) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTransitioning(false);
    }, 200);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={handleNavigate} />;
      case 'ask': return <AskPage />;
      case 'yojana': return <YojanaPage />;
      case 'scan': return <ScanPage />;
      case 'fee': return <FeePage />;
      case 'rule': return <RulePage />;
      case 'whatsNew': return <WhatsNewPage />;
      case 'safety': return <SafetyPage />;
      default: return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className={`flex-1 transition-opacity duration-200 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
