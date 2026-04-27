import React from 'react';
import { SectionHeader, SongItem } from '../components/UI';
import { MOCK_SONGS } from '../mockData';
import { Heart, Clock, ListMusic, Mic2, Star } from 'lucide-react';

export const LibraryScreen = () => {
  return (
    <div className="pt-12">
      <div className="px-6 mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-display font-bold">My Sanctuary</h1>
        <div className="flex -space-x-3">
           {[1, 2, 3].map(i => (
             <div key={i} className="w-10 h-10 rounded-full border-4 border-black bg-white/10 overflow-hidden">
                <img src={`https://i.pravatar.cc/100?u=friend${i}`} alt="" />
             </div>
           ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 px-6 mb-10">
        <div className="glass p-5 rounded-3xl group cursor-pointer hover:bg-white/10 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center mb-4 shadow-lg shadow-neon-pink/20">
            <Heart className="w-6 h-6 fill-white" />
          </div>
          <h3 className="font-bold">Liked Songs</h3>
          <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-1">1,240 Tracks</p>
        </div>
        
        <div className="glass p-5 rounded-3xl group cursor-pointer hover:bg-white/10 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-cyan flex items-center justify-center mb-4 shadow-lg shadow-neon-blue/20">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="font-bold">Recents</h3>
          <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-1">Last Played 2m ago</p>
        </div>

        <div className="glass p-5 rounded-3xl group cursor-pointer hover:bg-white/10 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-4 shadow-lg shadow-amber-500/20">
            <Star className="w-6 h-6 fill-white" />
          </div>
          <h3 className="font-bold">My Fan Ranking</h3>
          <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-1">#42 Global Hype</p>
        </div>

        <div className="glass p-5 rounded-3xl group cursor-pointer hover:bg-white/10 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
            <ListMusic className="w-6 h-6" />
          </div>
          <h3 className="font-bold">Playlists</h3>
          <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-1">24 Collections</p>
        </div>
      </div>

      <SectionHeader title="Mood Playlists" action="See All" />
      <div className="flex gap-4 overflow-x-auto px-6 mb-10 no-scrollbar">
        {['Chill Sunday', 'Hype Morning', 'Focus Flow', 'Heartbreak'].map((name, i) => (
          <div key={name} className="flex-shrink-0 w-32">
             <div className="aspect-square glass rounded-2xl mb-2 flex items-center justify-center overflow-hidden">
                <div className={`w-full h-full bg-gradient-to-br ${i % 2 === 0 ? 'from-neon-purple/20' : 'from-neon-blue/20'} to-transparent opacity-50 relative animate-pulse`} />
                <Mic2 className="absolute w-8 h-8 text-white/20" />
             </div>
             <h4 className="font-bold text-xs truncate">{name}</h4>
          </div>
        ))}
      </div>

      <SectionHeader title="Synced Tracks" />
      <div className="space-y-1">
        {MOCK_SONGS.map((song) => (
          <SongItem key={song.id} song={song} onClick={() => {}} />
        ))}
      </div>
    </div>
  );
};
