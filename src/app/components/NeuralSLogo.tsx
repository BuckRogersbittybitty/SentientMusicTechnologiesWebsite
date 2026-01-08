interface NeuralSLogoProps {
  className?: string;
  nodeColor?: string;
  pathColor?: string;
  accentColor?: string;
  animated?: boolean;
}

export function NeuralSLogo({ 
  className = "", 
  nodeColor = "#FFFFFF",
  pathColor = "#FFFFFF",
  accentColor = "#8B7FC7",
  animated = false
}: NeuralSLogoProps) {
  // S shape as a container - filled path
  const sPath = "M 45 12 C 32 12, 20 16, 20 25 C 20 34, 32 38, 40 40 C 48 42, 60 46, 60 55 C 60 64, 48 68, 35 68 C 28 68, 22 66, 18 62 L 18 62 C 22 68, 30 72, 38 72 C 52 72, 66 66, 66 55 C 66 44, 52 39, 42 37 C 32 35, 14 31, 14 25 C 14 14, 28 8, 45 8 C 52 8, 58 10, 62 14 L 62 14 C 58 9, 52 8, 45 8 Z";
  
  // Neural network with proper layered structure flowing through the S
  // Layer 1 (Input) - Top of S
  const layer1 = [
    { x: 42, y: 17, size: 2.5 },
  ];
  
  // Layer 2 (Hidden) - Upper curve
  const layer2 = [
    { x: 30, y: 26, size: 3.5 },
    { x: 40, y: 28, size: 4 },
  ];
  
  // Layer 3 (Hidden) - Middle transition
  const layer3 = [
    { x: 36, y: 40, size: 4.5 },
    { x: 50, y: 43, size: 3 },
  ];
  
  // Layer 4 (Hidden) - Lower curve
  const layer4 = [
    { x: 40, y: 54, size: 4 },
    { x: 50, y: 56, size: 2.5 },
  ];
  
  // Layer 5 (Output) - Bottom of S
  const layer5 = [
    { x: 38, y: 65, size: 3.5 },
  ];
  
  const nodes = [...layer1, ...layer2, ...layer3, ...layer4, ...layer5];
  
  // Neural network connections - fully connected between adjacent layers only
  const connections = [
    // Layer 1 to Layer 2
    ...layer1.flatMap(n1 => layer2.map(n2 => ({ x1: n1.x, y1: n1.y, x2: n2.x, y2: n2.y }))),
    
    // Layer 2 to Layer 3
    ...layer2.flatMap(n1 => layer3.map(n2 => ({ x1: n1.x, y1: n1.y, x2: n2.x, y2: n2.y }))),
    
    // Layer 3 to Layer 4
    ...layer3.flatMap(n1 => layer4.map(n2 => ({ x1: n1.x, y1: n1.y, x2: n2.x, y2: n2.y }))),
    
    // Layer 4 to Layer 5
    ...layer4.flatMap(n1 => layer5.map(n2 => ({ x1: n1.x, y1: n1.y, x2: n2.x, y2: n2.y }))),
  ];

  return (
    <svg 
      viewBox="0 0 80 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: accentColor, stopOpacity: 0.15 }} />
          <stop offset="50%" style={{ stopColor: accentColor, stopOpacity: 0.25 }} />
          <stop offset="100%" style={{ stopColor: accentColor, stopOpacity: 0.15 }} />
        </linearGradient>
      </defs>

      {/* S container - filled with subtle gradient */}
      <path 
        d={sPath} 
        fill="url(#accentGradient)"
      />
      
      {/* S outline */}
      <path 
        d="M 45 12 C 32 12, 20 16, 20 25 C 20 34, 32 38, 40 40 C 48 42, 60 46, 60 55 C 60 64, 48 68, 35 68" 
        stroke={pathColor} 
        strokeWidth="2.5" 
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />

      {/* Neural connection lines - between layers only */}
      {connections.map((conn, i) => (
        <line 
          key={i}
          x1={conn.x1} 
          y1={conn.y1} 
          x2={conn.x2} 
          y2={conn.y2} 
          stroke={accentColor} 
          strokeWidth="0.8" 
          opacity="0.35" 
        />
      ))}

      {/* Neural nodes organized in layers */}
      {nodes.map((node, i) => (
        <g key={i}>
          <circle 
            cx={node.x} 
            cy={node.y} 
            r={node.size} 
            fill={nodeColor}
            opacity="0.95"
            filter="url(#glow)"
          />
          <circle 
            cx={node.x} 
            cy={node.y} 
            r={node.size * 0.5} 
            fill={accentColor}
            opacity="0.7"
          >
            {animated && (
              <animate
                attributeName="opacity"
                values="0.7;1;0.7"
                dur="3s"
                begin={`${i * 0.4}s`}
                repeatCount="indefinite"
              />
            )}
          </circle>
          {animated && (
            <circle 
              cx={node.x} 
              cy={node.y} 
              r={node.size * 1.2} 
              fill={accentColor}
              opacity="0"
            >
              <animate
                attributeName="opacity"
                values="0;0.4;0"
                dur="3s"
                begin={`${i * 0.4}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values={`${node.size * 0.8};${node.size * 1.5};${node.size * 0.8}`}
                dur="3s"
                begin={`${i * 0.4}s`}
                repeatCount="indefinite"
              />
            </circle>
          )}
        </g>
      ))}
    </svg>
  );
}