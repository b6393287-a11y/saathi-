import { getTimeInTimeZone } from '../../utils/timeUtils';

interface TimeZone {
  id: string;
  name: string;
  offset: string;
  city: string;
}

interface ClockDisplayProps {
  tz: TimeZone;
  currentTime: Date;
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

export default function ClockDisplay({ tz, currentTime }: ClockDisplayProps) {
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
  });

  const offset = timeInZone.getTimezoneOffset();
  const offsetHours = -Math.floor(offset / 60);
  const offsetMinutes = Math.abs(offset % 60);
  const offsetString = `UTC${offsetHours >= 0 ? '+' : ''}${offsetHours}${offsetMinutes ? `:${offsetMinutes.toString().padStart(2, '0')}` : ''}`;

  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-500/60 transition-all backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/20">
      <div className="space-y-4">
        <div>
          <p className="text-white/60 text-sm mb-1 font-mono">{tz.offset}</p>
          <p className="text-2xl font-bold text-white">{tz.city}</p>
          <p className="text-white/40 text-xs mt-1">{tz.name}</p>
        </div>

        <div className="bg-black/40 rounded-lg p-4 border border-white/10">
          <p className="text-4xl font-mono font-bold text-cyan-400 text-center mb-2">
            {timeString}
          </p>
          <p className="text-center text-white/60 text-xs font-mono">{dateString}</p>
        </div>

        <div className="flex justify-between items-center text-xs text-white/50 font-mono">
          <span>{offsetString}</span>
          <span className="text-cyan-400/60">●</span>
        </div>
      </div>
    </div>
  );
}
