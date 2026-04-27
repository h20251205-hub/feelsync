import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, SkipBack, SkipForward, X, MessageSquare, Globe, Heart, Repeat, Shuffle, User } from 'lucide-react';
import { Song, Emotion } from '../types';
import { EMOTIONS } from '../mockData';

export const Player = ({ 
  song, 
  isPlaying, 
  onTogglePlay, 
  onClose, 
  isFull, 
  onToggleFull 
}: { 
  song: Song | null, 
  isPlaying: boolean, 
  onTogglePlay: () => void, 
  onClose?: () => void,
  isFull: boolean,
  onToggleFull: () => void
}) => {
  if (!song) return null;

  const mainEmotion = song.emotions[0];
  const emotionData = EMOTIONS.find(e => e.name === mainEmotion);

  return (
    <AnimatePresence>
      {!isFull ? (
        // Mini Player
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-[74px] left-4 right-4 h-16 glass rounded-2xl flex items-center px-4 gap-3 z-40 cursor-pointer shadow-2xl"
          onClick={onToggleFull}
        >
          <motion.img 
            layoutId="albumArt"
            src={song.albumArt} 
            className="w-10 h-10 rounded-lg object-cover shadow-lg" 
          />
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-sm truncate">{song.title}</h4>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-white/50 truncate">{song.artist}</span>
              <span className={`w-1 h-1 rounded-full ${emotionData?.color} animate-pulse`} />
              <span className="text-[10px] text-white/40">{mainEmotion}</span>
            </div>
          </div>
          <div className="flex items-center gap-3" onClick={e => e.stopPropagation()}>
            <button className="text-white/80 hover:text-white transition-colors">
              <SkipBack className="w-5 h-5 fill-current" />
            </button>
            <button 
              onClick={onTogglePlay}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${emotionData?.color} text-white shadow-lg`}
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
            </button>
          </div>
        </motion.div>
      ) : (
        // Full Screen Player
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-50 bg-black overflow-hidden flex flex-col"
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 opacity-40">
             <motion.div 
               animate={{ 
                 scale: [1, 1.2, 1],
                 rotate: [0, 90, 0],
                 x: [-20, 20, -20],
                 y: [-20, 20, -20]
               }}
               transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
               className={`absolute -top-1/4 -left-1/4 w-[150%] h-[150%] radial-gradient from-${emotionData?.color.split('-')[1] || 'neon-purple'}/40 via-transparent to-transparent opacity-50 filter blur-[80px]`} 
             />
          </div>

          {/* Header */}
          <div className="relative z-10 flex items-center justify-between p-6">
            <button onClick={onToggleFull} className="p-2 glass rounded-full">
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-1">Playing from NewJeans Radio</p>
              <h3 className="text-sm font-bold">{song.title}</h3>
            </div>
            <button className="p-2 glass rounded-full">
              <Heart className="w-6 h-6" />
            </button>
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 pb-12">
            <motion.div 
              layoutId="albumArt"
              className="relative w-full max-w-xs aspect-square rounded-3xl overflow-hidden shadow-2xl mb-10"
            >
              <img src={song.albumArt} className="w-full h-full object-cover" />
              <div className={`absolute inset-0 ring-1 ring-inset ring-white/20 rounded-3xl`} />
            </motion.div>

            <div className="w-full text-center mb-10">
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-display font-bold mb-2 tracking-tight"
              >
                {song.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-white/50"
              >
                {song.artist}
              </motion.p>
            </div>

            {/* Listener Count + Activity */}
            <div className="w-full flex items-center justify-center gap-6 mb-8">
              <div className="flex flex-col items-center">
                <div className="flex -space-x-2 mb-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-black bg-white/20 overflow-hidden">
                       <img src={`https://i.pravatar.cc/50?u=${i}`} alt="" />
                    </div>
                  ))}
                  <div className="w-6 h-6 rounded-full border-2 border-black glass flex items-center justify-center text-[8px] font-bold">+24k</div>
                </div>
                <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Sync Listeners</p>
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div className="flex flex-col items-center">
                 <div className="flex items-center gap-1 mb-2">
                   <div className={`w-2 h-2 rounded-full ${emotionData?.color} animate-pulse`} />
                    <span className="text-xl font-bold font-display">{mainEmotion}</span>
                 </div>
                 <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Dominant Mood</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full mb-8">
              <div className="relative w-full h-1.5 bg-white/10 rounded-full mb-2 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '45%' }}
                  className={`absolute top-0 left-0 h-full ${emotionData?.color} shadow-lg shadow-${emotionData?.color.split('-')[1]}/40`}
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-white/40">
                <span>01:24</span>
                <span>03:06</span>
              </div>
            </div>

            {/* Controls */}
            <div className="w-full flex items-center justify-between mb-10">
              <Shuffle className="w-5 h-5 text-white/40" />
              <div className="flex items-center gap-8">
                <SkipBack className="w-8 h-8 fill-white/80" />
                <button 
                  onClick={onTogglePlay}
                  className={`w-20 h-20 rounded-full flex items-center justify-center ${emotionData?.color} text-white shadow-2xl neon-glow-purple scale-110`}
                >
                  {isPlaying ? <Pause className="w-10 h-10 fill-current" /> : <Play className="w-10 h-10 fill-current ml-1" />}
                </button>
                <SkipForward className="w-8 h-8 fill-white/80" />
              </div>
              <Repeat className="w-5 h-5 text-white/40" />
            </div>

            {/* Footer Actions */}
            <div className="w-full grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center gap-2 py-4 glass rounded-2xl hover:bg-white/10 transition-colors">
                <Globe className="w-5 h-5 text-neon-blue" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Global Map</span>
              </button>
              <button className="flex flex-col items-center gap-2 py-4 glass rounded-2xl hover:bg-white/10 transition-colors">
                <MessageSquare className="w-5 h-5 text-neon-pink" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Reacts</span>
              </button>
              <button className="flex flex-col items-center gap-2 py-4 glass rounded-2xl hover:bg-white/10 transition-colors">
                <User className="w-5 h-5 text-neon-cyan" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Profiles</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
