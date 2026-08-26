import { useMemo } from 'react';
import { getTimeInTimeZone } from '../../utils/timeUtils';

interface TimeZone {
  id: string;
  name: string;
  offset: string;
  city: string;
}

interface AnalogClockProps {
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

export default function AnalogClock({ tz, currentTime }: AnalogClockProps) {
  const ianaZone = TIMEZONE_MAP[tz.offset] || 'UTC';
  const timeInZone = getTimeInTimeZone(currentTime, ianaZone);

  const angles = useMemo(() => {
    const hours = timeInZone.getHours() % 12;
    const minutes = timeInZone.getMinutes();
    const seconds = timeInZone.getSeconds();
    const milliseconds = timeInZone.getMilliseconds();

    return {
      hour: (hours * 30 + minutes * 0.5) % 360,
      minute: (minutes * 6 + seconds * 0.1) % 360,
      second: (seconds * 6 + milliseconds * 0.006) % 360,
    };
  }, [timeInZone]);

  const timeString = timeInZone.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-500/60 transition-all backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/20 flex flex-col">
      <div className="mb-4">
        <p className="text-white/60 text-sm mb-1 font-mono">{tz.offset}</p>
        <p className="text-xl font-bold text-white">{tz.city}</p>
      </div>

      {/* Analog Clock */}
      <div className="relative w-48 h-48 mx-auto mb-4">
        {/* Clock Face */}
        <svg className="w-full h-full" viewBox="0 0 200 200">
          {/* Background circle */}
          <circle cx="100" cy="100" r="95" fill="rgba(0,0,0,0.3)" stroke="rgba(34,211,238,0.3)" strokeWidth="2" />

          {/* Hour markers */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const x1 = 100 + 85 * Math.cos(angle);
            const y1 = 100 + 85 * Math.sin(angle);
            const x2 = 100 + 95 * Math.cos(angle);
            const y2 = 100 + 95 * Math.sin(angle);
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(34,211,238,0.5)" strokeWidth="2" />
            );
          })}

          {/* Hour hand */}
          <line
            x1="100"
            y1="100"
            x2={100 + 50 * Math.cos((angles.hour - 90) * (Math.PI / 180))}
            y2={100 + 50 * Math.sin((angles.hour - 90) * (Math.PI / 180))}
            stroke="rgba(34,211,238,0.9)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Minute hand */}
          <line
            x1="100"
            y1="100"
            x2={100 + 70 * Math.cos((angles.minute - 90) * (Math.PI / 180))}
            y2={100 + 70 * Math.sin((angles.minute - 90) * (Math.PI / 180))}
            stroke="rgba(59,130,246,0.8)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Second hand */}
          <line
            x1="100"
            y1="100"
            x2={100 + 75 * Math.cos((angles.second - 90) * (Math.PI / 180))}
            y2={100 + 75 * Math.sin((angles.second - 90) * (Math.PI / 180))}
            stroke="rgba(248,113,113,0.7)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Center dot */}
          <circle cx="100" cy="100" r="5" fill="rgba(34,211,238,0.9)" />
        </svg>
      </div>

      <p className="text-center text-cyan-400 font-mono font-bold">{timeString}</p>
    </div>
  );
}
