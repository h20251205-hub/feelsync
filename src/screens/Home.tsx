import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EMOTIONS, MOCK_SONGS } from '../mockData';
import { EmotionPill, SectionHeader, SongItem } from '../components/UI';
import { Search, Bell, User, Globe } from 'lucide-react';

export const HomeScreen = () => {
  const [selectedEmotion, setSelectedEmotion] = useState(EMOTIONS[0].name);

  return (
    <div className="pt-12">
      {/* Header */}
      <div className="px-6 flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">
            FeelSync
          </h1>
          <p className="text-xs text-white/40 font-bold uppercase tracking-widest mt-1">Global K-POP Pulse</p>
        </div>
        <div className="flex gap-3">
          <button className="p-2.5 glass rounded-full hover:bg-white/10 transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full overflow-hidden border-2 border-neon-purple/30 shadow-lg shadow-neon-purple/20">
            <img src="https://i.pravatar.cc/100?u=me" alt="User" className="w-full h-full object-cover" />
          </button>
        </div>
      </div>

      {/* Emotion Selector */}
      <div className="mb-10">
        <div className="px-6 mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold">How are you feeling?</h2>
          <span className="text-[10px] text-neon-purple font-bold">AI Powered</span>
        </div>
        <div className="flex gap-3 overflow-x-auto px-6 no-scrollbar">
          {EMOTIONS.map((emotion) => (
            <EmotionPill 
              key={emotion.name} 
              emotion={emotion} 
              active={selectedEmotion === emotion.name}
              onClick={() => setSelectedEmotion(emotion.name)}
            />
          ))}
        </div>
      </div>

      {/* Recommended for Mood */}
      <SectionHeader title={`Mood: ${selectedEmotion}`} action="Refine AI" />
      <div className="flex gap-4 overflow-x-auto px-6 mb-10 no-scrollbar">
        {MOCK_SONGS.filter(s => s.emotions.includes(selectedEmotion)).map((song, i) => (
          <motion.div 
            key={song.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex-shrink-0 w-40 group cursor-pointer"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 shadow-xl group-hover:scale-[1.02] transition-transform">
              <img src={song.albumArt} alt={song.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                <div className="w-8 h-8 rounded-full glass flex items-center justify-center text-white">
                  <Search className="w-4 h-4 fill-current" />
                </div>
              </div>
            </div>
            <h4 className="font-bold text-sm truncate">{song.title}</h4>
            <p className="text-xs text-white/40 truncate">{song.artist}</p>
          </motion.div>
        ))}
      </div>

      {/* Trending Global */}
      <SectionHeader title="Trending in World Map" action="View Heatmap" />
      <div className="space-y-1">
        {MOCK_SONGS.slice(0, 3).map((song) => (
          <SongItem key={song.id} song={song} onClick={() => {}} />
        ))}
      </div>

      {/* Discover Section */}
      <div className="px-6 mt-10">
        <div className="glass rounded-[2rem] p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Globe className="w-24 h-24 text-neon-blue" />
          </div>
          <div className="relative z-10">
            <h3 className="text-xl font-display font-bold mb-2">Synced Fans Visualization</h3>
            <p className="text-sm text-white/60 mb-6 max-w-[200px]">See how the world reacts to your current playlist in real-time.</p>
            <button className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-neon-blue hover:text-white transition-all">
              Go to Global Pulse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
