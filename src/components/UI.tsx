import { motion, AnimatePresence } from 'motion/react';
import { Home, Globe, MessageSquare, Play, Heart, Search, User } from 'lucide-react';
import { Emotion } from '../types';
import { EMOTIONS } from '../mockData';

export const NavItem = ({ icon: Icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center p-2 transition-all ${active ? 'text-neon-purple' : 'text-gray-400 opacity-60'}`}
  >
    <Icon className={`w-6 h-6 ${active ? 'fill-neon-purple/20' : ''}`} />
    <span className="text-[10px] mt-1 font-medium">{label}</span>
  </button>
);

export const EmotionPill = ({ emotion, active, onClick }: { emotion: typeof EMOTIONS[0], active: boolean, onClick: () => void, key?: any }) => (
  <motion.button
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all border ${
      active 
        ? `${emotion.color} text-white border-transparent shadow-lg neon-glow-purple` 
        : 'bg-white/5 text-white/70 border-white/10 hover:border-white/20'
    }`}
  >
    <span className="text-lg">{emotion.icon}</span>                                                                                                                       
    <span className="font-semibold text-sm">{emotion.name}</span>
  </motion.button>
);

export const SectionHeader = ({ title, action }: { title: string, action?: string }) => (
  <div className="flex items-center justify-between px-6 mb-4">
    <h2 className="text-xl font-display font-bold tracking-tight">{title}</h2>
    {action && <button className="text-sm text-neon-purple font-semibold hover:underline">{action}</button>}
  </div>
);

export const SongItem = ({ song, onClick }: { song: any, onClick: () => void, key?: any }) => (
  <motion.div 
    whileHover={{ x: 4 }}
    onClick={onClick}
    className="flex items-center gap-4 px-6 py-3 cursor-pointer group"
  >
    <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
      <img src={song.albumArt} alt={song.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
        <Play className="w-5 h-5 fill-white text-white" />
      </div>
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="font-bold text-sm truncate">{song.title}</h4>
      <p className="text-xs text-white/50 truncate">{song.artist}</p>
    </div>
    <div className="flex flex-col items-end gap-1">
      <div className="flex gap-1">
        {song.emotions.slice(0, 1).map((e: Emotion) => {
          const emotionData = EMOTIONS.find(em => em.name === e);
          return (
            <span key={e} className={`text-[10px] px-1.5 py-0.5 rounded ${emotionData?.color} text-white font-bold uppercase`}>
              {e}
            </span>
          );
        })}
      </div>
      <p className="text-[10px] text-white/40">{(song.listenerCount / 1000).toFixed(1)}k listening</p>
    </div>
  </motion.div>
);
