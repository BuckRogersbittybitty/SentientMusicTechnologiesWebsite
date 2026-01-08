import { useEffect, useRef, useState } from 'react';
import svgPaths from '../../imports/svg-m34brricb2';

interface VibratingStringProps {
  className?: string;
}

export function VibratingString({ className = '' }: VibratingStringProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ overflow: 'visible' }}>
      {/* Wave 1 - Bottom layer */}
      <div className="absolute inset-0" style={{ overflow: 'visible' }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 281.25 25.8679" style={{ overflow: 'visible' }}>
          <path
            d={svgPaths.p234b8f00}
            opacity="0.2"
            stroke="white"
            strokeLinecap="round"
            strokeWidth="7.8125"
            style={{
              animation: isVisible ? 'vibrate1 2s ease-in-out infinite' : 'none',
            }}
          />
        </svg>
      </div>

      {/* Wave 2 - Middle layer */}
      <div className="absolute inset-0" style={{ overflow: 'visible' }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 279.298 18.8015" style={{ overflow: 'visible' }}>
          <path
            d={svgPaths.p3fbc5a00}
            opacity="0.5"
            stroke="white"
            strokeLinecap="round"
            strokeWidth="5.85938"
            style={{
              animation: isVisible ? 'vibrate2 2s ease-in-out infinite 0.15s' : 'none',
            }}
          />
        </svg>
      </div>

      {/* Wave 3 - Top layer */}
      <div className="absolute inset-0" style={{ overflow: 'visible' }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 277.344 40.3656" style={{ overflow: 'visible' }}>
          <path
            d={svgPaths.p11499200}
            opacity="0.8"
            stroke="white"
            strokeLinecap="round"
            strokeWidth="3.90625"
            style={{
              animation: isVisible ? 'vibrate3 2s ease-in-out infinite 0.3s' : 'none',
            }}
          />
        </svg>
      </div>

      <style>{`
        @keyframes vibrate1 {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.2;
          }
          25% {
            transform: translateY(-1px);
            opacity: 0.25;
          }
          50% {
            transform: translateY(0);
            opacity: 0.2;
          }
          75% {
            transform: translateY(1px);
            opacity: 0.25;
          }
        }

        @keyframes vibrate2 {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          25% {
            transform: translateY(1.5px);
            opacity: 0.55;
          }
          50% {
            transform: translateY(0);
            opacity: 0.5;
          }
          75% {
            transform: translateY(-1.5px);
            opacity: 0.55;
          }
        }

        @keyframes vibrate3 {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.8;
          }
          25% {
            transform: translateY(0.75px);
            opacity: 0.85;
          }
          50% {
            transform: translateY(0);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-0.75px);
            opacity: 0.85;
          }
        }
      `}</style>
    </div>
  );
}