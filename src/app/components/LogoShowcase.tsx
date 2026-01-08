import { NeuralSLogo } from "./NeuralSLogo";

interface LogoVariant {
  type: 'primary' | 'secondary' | 'icon';
  theme: 'dark' | 'light';
}

export function LogoShowcase({ type, theme }: LogoVariant) {
  const isDark = theme === 'dark';
  const bgColor = isDark ? 'bg-[#1a1a1a]' : 'bg-white';
  const textColor = isDark ? 'text-white' : 'text-[#1a1a1a]';
  const accentColor = isDark ? '#8B7FC7' : '#6B5FB7';
  
  return (
    <div className={`${bgColor} ${textColor} p-12 rounded-lg flex items-center justify-center min-h-[280px]`}>
      {type === 'primary' && (
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            <NeuralSLogo 
              className="w-20 h-20" 
              nodeColor={isDark ? '#FFFFFF' : '#1a1a1a'}
              pathColor={isDark ? '#FFFFFF' : '#1a1a1a'}
              accentColor={accentColor}
            />
            <div className="flex flex-col">
              <h1 className="text-4xl tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
                Sentient Music Technologies
              </h1>
              <p className="text-sm tracking-widest opacity-50 mt-1" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                LLC
              </p>
            </div>
          </div>
        </div>
      )}

      {type === 'secondary' && (
        <div className="flex items-center gap-8">
          <NeuralSLogo 
            className="w-24 h-24" 
            nodeColor={isDark ? '#FFFFFF' : '#1a1a1a'}
            pathColor={isDark ? '#FFFFFF' : '#1a1a1a'}
            accentColor={accentColor}
          />
          <h2 className="text-6xl tracking-wider" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
            SMT
          </h2>
        </div>
      )}

      {type === 'icon' && (
        <NeuralSLogo 
          className="w-32 h-32" 
          nodeColor={isDark ? '#FFFFFF' : '#1a1a1a'}
          pathColor={isDark ? '#FFFFFF' : '#1a1a1a'}
          accentColor={accentColor}
        />
      )}
    </div>
  );
}
