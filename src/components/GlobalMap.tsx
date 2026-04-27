import { motion } from 'motion/react';
import { CountryEmotion } from '../types';
import { EMOTIONS } from '../mockData';

export const GlobalMap = ({ activeSongEmotions, countryData }: { activeSongEmotions?: string[], countryData: CountryEmotion[] }) => {
  return (
    <div className="relative w-full aspect-video glass rounded-2xl overflow-hidden mb-6 p-4">
      {/* Abstract World Map Background */}
      <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20 fill-white/20">
        <path d="M150,150 Q200,100 250,150 T350,150 Q400,200 450,150 T550,150 Q600,100 650,150 T750,150 Q800,200 850,150 T950,150" fill="none" stroke="currentColor" strokeWidth="2" />
        {/* Simple dots for continents */}
        <circle cx="200" cy="150" r="40" />
        <circle cx="500" cy="120" r="60" />
        <circle cx="800" cy="180" r="50" />
        <circle cx="300" cy="400" r="45" />
        <circle cx="700" cy="380" r="55" />
      </svg>

      {/* Heatmap/Emotion Hotspots */}
      <div className="absolute inset-0 pointer-events-none">
        {countryData.map((data, idx) => {
          const emotion = EMOTIONS.find(e => e.name === data.dominantEmotion);
          return (
            <motion.div
              key={data.country}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              style={{ left: `${data.coords.x}%`, top: `${data.coords.y}%` }}
              className="absolute group pointer-events-auto"
            >
              {/* Pulse effect */}
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`absolute -inset-4 rounded-full ${emotion?.color} opacity-20`}
              />
              
              {/* Hotspot */}
              <div className={`relative w-4 h-4 rounded-full ${emotion?.color} neon-glow-purple border-2 border-white/40 cursor-help flex items-center justify-center`}>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] whitespace-nowrap border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-bold">{data.country}: </span>
                  <span>{emotion?.icon} {data.dominantEmotion}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="absolute bottom-3 left-3 flex flex-wrap gap-2 max-w-[70%]">
        {EMOTIONS.slice(0, 4).map(e => (
          <div key={e.name} className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full border border-white/5">
            <div className={`w-1.5 h-1.5 rounded-full ${e.color}`} />
            <span className="text-[9px] text-white/60 font-medium">{e.name}</span>
          </div>
        ))}
      </div>
      
      <div className="absolute top-3 right-3 text-[10px] bg-neon-purple/20 text-neon-purple px-2 py-1 rounded border border-neon-purple/20 font-bold uppercase tracking-widest">
        Live Pulse
      </div>
    </div>
  );
};
