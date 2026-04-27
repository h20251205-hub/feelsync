import React from 'react';
import { GlobalMap } from '../components/GlobalMap';
import { MOCK_MAP_DATA, MOCK_SONGS } from '../mockData';
import { SectionHeader, SongItem } from '../components/UI';
import { Globe, Users, TrendingUp } from 'lucide-react';

export const GlobalScreen = () => {
  return (
    <div className="pt-12 px-6">
      <div className="mb-8">
        <h1 className="text-2xl font-display font-bold">Global Emotion Map</h1>
        <p className="text-sm text-white/50">Real-time emotional pulse of K-POP fans worldwide.</p>
      </div>

      <GlobalMap countryData={MOCK_MAP_DATA} />

      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="glass p-4 rounded-2xl">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-neon-blue" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Sync Count</span>
          </div>
          <p className="text-2xl font-display font-bold">1.2M+</p>
          <p className="text-[10px] text-emerald-400 font-bold mt-1">+12% from last hour</p>
        </div>
        <div className="glass p-4 rounded-2xl">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-neon-pink" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Top Emotion</span>
          </div>
          <p className="text-2xl font-display font-bold">Nostalgia</p>
          <p className="text-[10px] text-white/40 font-bold mt-1">Leading in: S. Korea, Japan</p>
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-display font-bold">Regional Anthems</h2>
        <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-white/60 font-bold">Updated Live</span>
      </div>
      
      <div className="space-y-4 -mx-6">
        <div className="bg-white/5 p-4 mx-6 rounded-2xl border border-white/5">
           <div className="flex items-center justify-between mb-4">
             <div className="flex items-center gap-2">
                <span className="text-lg">🇺🇸</span>
                <span className="font-bold">USA</span>
             </div>
             <span className="text-[10px] font-bold text-neon-blue">Hype Priority</span>
           </div>
           <SongItem song={MOCK_SONGS[4]} onClick={() => {}} />
        </div>

        <div className="bg-white/5 p-4 mx-6 rounded-2xl border border-white/5">
           <div className="flex items-center justify-between mb-4">
             <div className="flex items-center gap-2">
                <span className="text-lg">🇰🇷</span>
                <span className="font-bold">South Korea</span>
             </div>
             <span className="text-[10px] font-bold text-neon-purple">Emotional Focus</span>
           </div>
           <SongItem song={MOCK_SONGS[0]} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};
