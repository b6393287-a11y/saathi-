import { useState } from 'react';
import { Search, X } from 'lucide-react';

interface TimeZone {
  id: string;
  name: string;
  offset: string;
  city: string;
}

interface TimeZoneSelectorProps {
  timezones: TimeZone[];
  onSelect: (tz: TimeZone) => void;
  onClose: () => void;
}

export default function TimeZoneSelector({ timezones, onSelect, onClose }: TimeZoneSelectorProps) {
  const [search, setSearch] = useState('');

  const filtered = timezones.filter(tz =>
    tz.city.toLowerCase().includes(search.toLowerCase()) ||
    tz.offset.toLowerCase().includes(search.toLowerCase()) ||
    tz.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 mb-6">
      <div className="bg-gray-900 rounded-xl border border-cyan-500/30 max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col shadow-2xl shadow-cyan-500/20">
        {/* Header */}
        <div className="bg-black/50 border-b border-cyan-500/30 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Add Time Zone</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-red-500/20 text-red-400 rounded-lg transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search */}
        <div className="border-b border-cyan-500/30 p-6 bg-gray-800/30">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search by city, timezone, or offset..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
              autoFocus
            />
          </div>
        </div>

        {/* Time Zones List */}
        <div className="overflow-y-auto flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-6">
            {filtered.map(tz => (
              <button
                key={tz.id}
                onClick={() => onSelect(tz)}
                className="text-left p-4 bg-gray-800/50 border border-white/10 hover:border-cyan-500/50 rounded-lg transition-all hover:bg-cyan-500/10 group"
              >
                <p className="font-mono font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  {tz.offset}
                </p>
                <p className="text-white font-semibold mt-1">{tz.city}</p>
                <p className="text-white/60 text-xs mt-1">{tz.name}</p>
              </button>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="flex items-center justify-center h-32 text-white/60">
              <p>No time zones found matching "{search}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
