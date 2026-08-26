import { useEffect, useState } from 'react';

export type CharState = 'idle' | 'welcome' | 'listening' | 'thinking' | 'speaking' | 'success' | 'warning';

interface SaathiCharacterProps {
  state: CharState;
  size?: number;
  showSoundWaves?: boolean;
}

export function SaathiCharacter({ state, size = 200, showSoundWaves = true }: SaathiCharacterProps) {
  const [blinkKey, setBlinkKey] = useState(0);

  useEffect(() => {
    if (state !== 'idle' && state !== 'welcome') return;
    const interval = setInterval(() => {
      setBlinkKey((k) => k + 1);
    }, 3500 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, [state]);

  const isListening = state === 'listening';
  const isThinking = state === 'thinking';
  const isSpeaking = state === 'speaking';
  const isSuccess = state === 'success';
  const isWarning = state === 'warning';
  const isWelcome = state === 'welcome';

  const glowColor = isWarning
    ? 'shadow-[0_0_60px_-5px_rgba(239,100,6,0.5)]'
    : isSuccess
    ? 'shadow-[0_0_60px_-5px_rgba(47,154,91,0.5)]'
    : isListening
    ? 'shadow-[0_0_60px_-5px_rgba(254,125,16,0.4)]'
    : isThinking
    ? 'shadow-[0_0_60px_-5px_rgba(99,120,155,0.4)]'
    : 'shadow-[0_0_50px_-8px_rgba(47,154,91,0.3)]';

  const bodyColor = isWarning
    ? 'from-saffron-400 to-saffron-600'
    : isSuccess
    ? 'from-saathi-400 to-saathi-600'
    : isListening
    ? 'from-saathi-500 to-saathi-700'
    : isThinking
    ? 'from-ink-500 to-ink-700'
    : 'from-saathi-400 to-saathi-600';

  const eyeShape = isThinking ? 'thinking' : isListening ? 'attentive' : isSpeaking ? 'speaking' : 'normal';
  const shouldBlink = (state === 'idle' || state === 'welcome') && blinkKey % 5 === 0;

  return (
    <div
      className={`relative flex items-center justify-center transition-all duration-500 ${glowColor}`}
      style={{ width: size, height: size }}
    >
      {/* Pulse rings when listening */}
      {isListening && showSoundWaves && (
        <>
          <div className="absolute inset-0 rounded-full bg-saffron-400/30 animate-pulse-ring" />
          <div
            className="absolute inset-0 rounded-full bg-saffron-400/20 animate-pulse-ring"
            style={{ animationDelay: '0.5s' }}
          />
          <div
            className="absolute inset-0 rounded-full bg-saffron-400/10 animate-pulse-ring"
            style={{ animationDelay: '1s' }}
          />
        </>
      )}

      {/* Thinking orbit dots */}
      {isThinking && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-full h-full animate-thinking-spin">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-saathi-400"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 120}deg) translateX(${size * 0.42}px)`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Floating animation wrapper */}
      <div className={`relative ${state === 'idle' || state === 'welcome' ? 'animate-float-slow' : 'animate-float-soft'}`}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          {/* Antenna */}
          <line
            x1="100"
            y1="20"
            x2="100"
            y2="40"
            stroke="currentColor"
            className={`text-${isWarning ? 'saffron' : 'saathi'}-400`}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle
            cx="100"
            cy="16"
            r="6"
            className={`fill-current ${isWarning ? 'text-saffron-400' : 'text-saathi-400'} ${isThinking || isListening ? 'animate-glow-pulse' : ''}`}
          />

          {/* Head/Body - rounded shape */}
          <defs>
            <linearGradient id={`bodyGrad-${state}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="currentColor" className={`text-gradient-top`} />
              <stop offset="100%" stopColor="currentColor" className={`text-gradient-bottom`} />
            </linearGradient>
          </defs>

          {/* Main body */}
          <g className={`bg-gradient-to-b ${bodyColor}`}>
            <ellipse
              cx="100"
              cy="100"
              rx="70"
              ry="65"
              className={`fill-current ${
                isWarning ? 'text-saffron-400' : isSuccess ? 'text-saathi-400' : isThinking ? 'text-ink-500' : 'text-saathi-500'
              }`}
            />
            <ellipse
              cx="100"
              cy="100"
              rx="70"
              ry="65"
              className={`fill-current ${
                isWarning ? 'text-saffron-500' : isSuccess ? 'text-saathi-500' : isThinking ? 'text-ink-600' : 'text-saathi-600'
              }`}
              opacity="0.7"
            />
          </g>

          {/* Face area - lighter circle */}
          <ellipse cx="100" cy="100" rx="55" ry="50" className="fill-white" opacity="0.95" />

          {/* Cheeks */}
          {(isSuccess || isWelcome) && (
            <>
              <circle cx="70" cy="110" r="8" className="fill-saffron-300" opacity="0.6" />
              <circle cx="130" cy="110" r="8" className="fill-saffron-300" opacity="0.6" />
            </>
          )}

          {/* Eyes */}
          {eyeShape === 'normal' && (
            <>
              <g key={blinkKey} className={shouldBlink ? 'animate-blink' : ''} style={{ transformOrigin: '85px 88px' }}>
                <ellipse cx="85" cy="88" rx="8" ry={shouldBlink ? 1 : 9} className="fill-ink-800" />
              </g>
              <g className={shouldBlink ? 'animate-blink' : ''} style={{ transformOrigin: '115px 88px' }}>
                <ellipse cx="115" cy="88" rx="8" ry={shouldBlink ? 1 : 9} className="fill-ink-800" />
              </g>
              {/* Eye highlights */}
              {!shouldBlink && (
                <>
                  <circle cx="88" cy="85" r="2.5" className="fill-white" />
                  <circle cx="118" cy="85" r="2.5" className="fill-white" />
                </>
              )}
            </>
          )}

          {eyeShape === 'attentive' && (
            <>
              <ellipse cx="85" cy="86" rx="10" ry="11" className="fill-ink-800" />
              <ellipse cx="115" cy="86" rx="10" ry="11" className="fill-ink-800" />
              <circle cx="88" cy="83" r="3" className="fill-white" />
              <circle cx="118" cy="83" r="3" className="fill-white" />
              {/* Raised eyebrows */}
              <path d="M 72 72 Q 85 66 98 72" stroke="currentColor" className="text-ink-700" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M 102 72 Q 115 66 128 72" stroke="currentColor" className="text-ink-700" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </>
          )}

          {eyeShape === 'thinking' && (
            <>
              {/* Looking up */}
              <ellipse cx="85" cy="84" rx="8" ry="9" className="fill-ink-800" />
              <ellipse cx="115" cy="84" rx="8" ry="9" className="fill-ink-800" />
              <circle cx="85" cy="80" r="2.5" className="fill-white" />
              <circle cx="115" cy="80" r="2.5" className="fill-white" />
              {/* One raised eyebrow */}
              <path d="M 72 70 Q 85 64 98 70" stroke="currentColor" className="text-ink-700" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <line x1="102" y1="72" x2="128" y2="72" stroke="currentColor" className="text-ink-700" strokeWidth="2.5" strokeLinecap="round" />
            </>
          )}

          {eyeShape === 'speaking' && (
            <>
              <ellipse cx="85" cy="88" rx="8" ry="9" className="fill-ink-800" />
              <ellipse cx="115" cy="88" rx="8" ry="9" className="fill-ink-800" />
              <circle cx="88" cy="85" r="2.5" className="fill-white" />
              <circle cx="118" cy="85" r="2.5" className="fill-white" />
            </>
          )}

          {/* Mouth */}
          {isSuccess && (
            <path d="M 80 115 Q 100 135 120 115" stroke="currentColor" className="text-saathi-700" strokeWidth="4" fill="none" strokeLinecap="round" />
          )}
          {isWarning && (
            <path d="M 80 122 Q 100 110 120 122" stroke="currentColor" className="text-saffron-700" strokeWidth="4" fill="none" strokeLinecap="round" />
          )}
          {isSpeaking && (
            <ellipse cx="100" cy="118" rx="10" ry="6" className="fill-ink-700 animate-mouth-talk" style={{ transformOrigin: '100px 118px' }} />
          )}
          {isThinking && (
            <line x1="88" y1="118" x2="112" y2="118" stroke="currentColor" className="text-ink-600" strokeWidth="3" strokeLinecap="round" />
          )}
          {isListening && (
            <ellipse cx="100" cy="118" rx="7" ry="4" className="fill-ink-600" />
          )}
          {(state === 'idle' || state === 'welcome') && (
            <path d="M 85 115 Q 100 125 115 115" stroke="currentColor" className="text-ink-600" strokeWidth="3" fill="none" strokeLinecap="round" />
          )}

          {/* Welcome wave hand */}
          {isWelcome && (
            <g className="animate-wave" style={{ transformOrigin: '160px 100px' }}>
              <ellipse cx="160" cy="100" rx="12" ry="18" className="fill-saathi-500" transform="rotate(20 160 100)" />
            </g>
          )}

          {/* Small arms */}
          {(state === 'idle' || state === 'listening' || state === 'speaking') && (
            <>
              <ellipse
                cx="35"
                cy="115"
                rx="10"
                ry="16"
                className={`fill-current ${isWarning ? 'text-saffron-500' : 'text-saathi-500'}`}
                transform={isListening ? 'rotate(-15 35 115)' : 'rotate(0 35 115)'}
                style={{ transition: 'transform 0.5s ease' }}
              />
              <ellipse
                cx="165"
                cy="115"
                rx="10"
                ry="16"
                className={`fill-current ${isWarning ? 'text-saffron-500' : 'text-saathi-500'}`}
                transform={isListening ? 'rotate(15 165 115)' : 'rotate(0 165 115)'}
                style={{ transition: 'transform 0.5s ease' }}
              />
            </>
          )}

          {/* Success checkmark badge */}
          {isSuccess && (
            <g>
              <circle cx="155" cy="55" r="16" className="fill-saathi-500 stroke-white" strokeWidth="3" />
              <path d="M 148 55 L 153 60 L 163 50" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          )}

          {/* Warning badge */}
          {isWarning && (
            <g>
              <circle cx="155" cy="55" r="16" className="fill-saffron-500 stroke-white" strokeWidth="3" />
              <line x1="155" y1="48" x2="155" y2="58" stroke="white" strokeWidth="3" strokeLinecap="round" />
              <circle cx="155" cy="63" r="1.5" className="fill-white" />
            </g>
          )}
        </svg>

        {/* Sound wave bars when listening */}
        {isListening && showSoundWaves && (
          <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-end gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-1.5 rounded-full bg-saffron-500 animate-sound-wave"
                style={{
                  height: '20px',
                  animationDelay: `${i * 0.12}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
