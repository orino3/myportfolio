'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

export default function EntranceAnimation() {
  const router = useRouter();
  const [show, setShow] = React.useState(true);
  const [text, setText] = React.useState('');
  const [showDot, setShowDot] = React.useState(false);
  const [showButton, setShowButton] = React.useState(false);
  const [phase, setPhase] = React.useState<'typing' | 'shutdown' | 'final'>('typing');

  React.useEffect(() => {
    const fullText = 'CREATION';
    let currentIndex = 0;

    // Phase 1: Typing effect
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        
        // Start dot blinking after text is complete
        let blinkCount = 0;
        setShowDot(true);
        const blinkInterval = setInterval(() => {
          blinkCount++;
          if (blinkCount < 4) { // Two full blinks (4 state changes)
            setShowDot(prev => !prev);
          } else {
            clearInterval(blinkInterval);
            setShowDot(true); // Show the dot one last time
            // Hide dot for 500ms, then start shutdown
            setTimeout(() => {
              setShowDot(false);
              setTimeout(() => setPhase('shutdown'), 500);
            }, 500);
          }
        }, 680); // 85% of 800ms
      }
    }, 100);

    // Phase 2: Shutdown effect happens automatically via CSS
    // Phase 3: Show final text after shutdown
    const finalTimer = setTimeout(() => {
      setPhase('final');
      // Show button 1s after text appears
      setTimeout(() => {
        setShowButton(true);
      }, 1000);
    }, 5500); // Reduced from 7000 to 5500

    return () => {
      clearInterval(typingInterval);
      clearTimeout(finalTimer);
    };
  }, []);

  const handleEnter = () => {
    setShow(false);
    router.push('/about');
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* Main text with typing effect */}
      {phase === 'typing' && (
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <div className="flex items-center">
            <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] text-white tracking-normal font-bold">
              {text}
            </h1>
            <div className="w-[6rem] md:w-[8rem] lg:w-[10rem]">
              <span className="text-[12rem] md:text-[16rem] lg:text-[20rem] text-white font-bold">
                {showDot ? '.' : ''}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* TV shutdown effect */}
      {phase === 'shutdown' && (
        <div className="absolute inset-0 animate-tvShutdown">
          <div className="absolute inset-0 flex items-center justify-center px-8">
            <div className="flex items-center">
              <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] text-white tracking-normal font-bold">
                {text}
              </h1>
              <div className="w-[6rem] md:w-[8rem] lg:w-[10rem]">
                <span className="text-[12rem] md:text-[16rem] lg:text-[20rem] text-white font-bold">
                  {showDot ? '.' : ''}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Final text */}
      {phase === 'final' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <p className="text-2xl text-white tracking-[0.5em] font-light animate-fadeIn text-center">
              BY ORI RAZ
            </p>
            {showButton && (
              <div className="absolute top-20 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <button 
                  onClick={handleEnter}
                  className="px-4 py-2 text-sm text-white border border-white/20 rounded hover:bg-white/10 transition-colors animate-fadeIn"
                >
                  Click here to enter
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 