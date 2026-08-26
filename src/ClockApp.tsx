import { useState, useEffect } from 'react';
import { Plus, X, Settings2, Globe } from 'lucide-react';
import ClockDisplay from './components/Clock/ClockDisplay';
import TimeZoneSelector from './components/Clock/TimeZoneSelector';
import ClockGrid from './components/Clock/ClockGrid';
import AnalogClock from './components/Clock/AnalogClock';

interface TimeZone {
  id: string;
  name: string;
  offset: string;
  city: string;
}

const DEFAULT_TIMEZONES: TimeZone[] = [
  { id: 'UTC', name: 'UTC', offset: 'UTC', city: 'London' },
  { id: 'EST', name: 'Eastern', offset: 'EST', city: 'New York' },
  { id: 'CST', name: 'Central', offset: 'CST', city: 'Chicago' },
  { id: 'MST', name: 'Mountain', offset: 'MST', city: 'Denver' },
  { id: 'PST', name: 'Pacific', offset: 'PST', city: 'Los Angeles' },
  { id: 'IST', name: 'India', offset: 'IST', city: 'New Delhi' },
  { id: 'JST', name: 'Japan', offset: 'JST', city: 'Tokyo' },
  { id: 'AEST', name: 'Australia', offset: 'AEST', city: 'Sydney' },
];

const TIMEZONE_MAP: { [key: string]: string } = {
  'UTC': 'UTC',
  'EST': 'America/New_York',
  'CST': 'America/Chicago',
  'MST': 'America/Denver',
  'PST': 'America/Los_Angeles',
  'IST': 'Asia/Kolkata',
  'JST': 'Asia/Tokyo',
  'AEST': 'Australia/Sydney',
  'GMT': 'Europe/London',
  'CET': 'Europe/Paris',
  'EET': 'Europe/Athens',
  'GST': 'Asia/Dubai',
  'SGT': 'Asia/Singapore',
  'NZST': 'Pacific/Auckland',
  'ACDST': 'Australia/Adelaide',
  'AWST': 'Australia/Perth',
};

export default function ClockApp() {
  const [timeZones, setTimeZones] = useState<TimeZone[]>(DEFAULT_TIMEZONES);
  const [showSelector, setShowSelector] = useState(false);
  const [viewMode, setViewMode] = useState<'digital' | 'analog' | 'grid'>('grid');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const addTimeZone = (timezone: TimeZone) => {
    if (!timeZones.find(tz => tz.id === timezone.id)) {
      setTimeZones([...timeZones, timezone]);
      setShowSelector(false);
    }
  };

  const removeTimeZone = (id: string) => {
    if (timeZones.length > 1) {
      setTimeZones(timeZones.filter(tz => tz.id !== id));
    }
  };

  const availableTimeZones = Object.entries(TIMEZONE_MAP).map(([offset, iana]) => ({
    id: offset,
    name: offset,
    offset: offset,
    city: iana.split('/')[1] || iana,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Globe className="w-8 h-8 text-cyan-400" />
              <h1 className="text-4xl font-bold text-white font-mono">World Clock</h1>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('digital')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  viewMode === 'digital'
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/50'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Digital
              </button>
              <button
                onClick={() => setViewMode('analog')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  viewMode === 'analog'
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/50'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Analog
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/50'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Grid
              </button>
            </div>
          </div>

          {/* Main Clock Display */}
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-white/10 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm mb-2">Local Time</p>
                <div className="text-5xl font-mono font-bold text-white">
                  {currentTime.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true,
                  })}
                </div>
                <p className="text-white/60 text-sm mt-2">
                  {currentTime.toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </div>
              <button
                onClick={() => setShowSelector(true)}
                className="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
              >
                <Plus className="w-5 h-5" />
                Add Time Zone
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {showSelector && (
          <TimeZoneSelector
            timezones={availableTimeZones}
            onSelect={addTimeZone}
            onClose={() => setShowSelector(false)}
          />
        )}

        {viewMode === 'digital' && (
          <div className="grid md:grid-cols-2 gap-6">
            {timeZones.map(tz => (
              <div key={tz.id} className="relative">
                <button
                  onClick={() => removeTimeZone(tz.id)}
                  className="absolute top-3 right-3 z-10 p-2 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded-lg transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
                <ClockDisplay tz={tz} currentTime={currentTime} />
              </div>
            ))}
          </div>
        )}

        {viewMode === 'analog' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timeZones.map(tz => (
              <div key={tz.id} className="relative">
                <button
                  onClick={() => removeTimeZone(tz.id)}
                  className="absolute top-3 right-3 z-10 p-2 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded-lg transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
                <AnalogClock tz={tz} currentTime={currentTime} />
              </div>
            ))}
          </div>
        )}

        {viewMode === 'grid' && (
          <ClockGrid
            timeZones={timeZones}
            currentTime={currentTime}
            onRemove={removeTimeZone}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-black/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-white/60 font-mono text-sm">
          <p>🕐 World Clock - Display time in multiple time zones simultaneously</p>
        </div>
      </footer>
    </div>
  );
}
