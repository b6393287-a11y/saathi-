import { getTimeInTimeZone } from '../../utils/timeUtils';
import { X } from 'lucide-react';

interface TimeZone {
  id: string;
  name: string;
  offset: string;
  city: string;
}

interface ClockGridProps {
  timeZones: TimeZone[];
  currentTime: Date;
  onRemove: (id: string) => void;
}

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

export default function ClockGrid({ timeZones, currentTime, onRemove }: ClockGridProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-black/30 border-b border-cyan-500/30">
            <th className="px-6 py-4 text-left text-white font-mono text-sm">City</th>
            <th className="px-6 py-4 text-left text-white font-mono text-sm">Time Zone</th>
            <th className="px-6 py-4 text-left text-white font-mono text-sm">Current Time</th>
            <th className="px-6 py-4 text-left text-white font-mono text-sm">Date</th>
            <th className="px-6 py-4 text-left text-white font-mono text-sm">UTC Offset</th>
            <th className="px-6 py-4 text-center text-white font-mono text-sm">Action</th>
          </tr>
        </thead>
        <tbody>
          {timeZones.map((tz, index) => {
            const ianaZone = TIMEZONE_MAP[tz.offset] || 'UTC';
            const timeInZone = getTimeInTimeZone(currentTime, ianaZone);

            const timeString = timeInZone.toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: true,
            });

            const dateString = timeInZone.toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            });

            const offset = timeInZone.getTimezoneOffset();
            const offsetHours = -Math.floor(offset / 60);
            const offsetMinutes = Math.abs(offset % 60);
            const offsetString = `UTC${offsetHours >= 0 ? '+' : ''}${offsetHours}${offsetMinutes ? `:${offsetMinutes.toString().padStart(2, '0')}` : ''}`;

            return (
              <tr
                key={tz.id}
                className={`border-b border-white/5 hover:bg-cyan-500/5 transition-colors ${
                  index % 2 === 0 ? 'bg-gray-900/20' : 'bg-gray-800/20'
                }`}
              >
                <td className="px-6 py-4">
                  <div>
                    <p className="text-white font-semibold">{tz.city}</p>
                    <p className="text-white/60 text-xs">{tz.name}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-cyan-400 font-mono text-sm">{tz.offset}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-white font-mono font-bold text-lg">{timeString}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-white/70 font-mono text-sm">{dateString}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-white/70 font-mono text-sm">{offsetString}</span>
                </td>
                <td className="px-6 py-4 text-center">
                  {timeZones.length > 1 && (
                    <button
                      onClick={() => onRemove(tz.id)}
                      className="p-2 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded transition-all inline-flex items-center justify-center"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
