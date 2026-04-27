import React, { useState } from 'react';
import { Home, Globe, MessageSquare, Library, Search } from 'lucide-react';
import { NavItem } from './UI';
import { MOCK_SONGS } from '../mockData';
import { Player } from './Player';

export const Layout = ({ children, activeTab, onTabChange }: { children: React.ReactNode, activeTab: string, onTabChange: (tab: string) => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullPlayer, setIsFullPlayer] = useState(false);
  const [currentSong, setCurrentSong] = useState(MOCK_SONGS[0]);

  return (
    <div className="relative h-screen w-full flex flex-col bg-black overflow-hidden select-none">
      {/* Content Area */}
      <main className="flex-1 overflow-y-auto no-scrollbar pb-32">
        {children}
      </main>

      {/* Mini Player / Full Player */}
      <Player 
        song={currentSong}
        isPlaying={isPlaying}
        onTogglePlay={() => setIsPlaying(!isPlaying)}
        isFull={isFullPlayer}
        onToggleFull={() => setIsFullPlayer(!isFullPlayer)}
      />

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 h-20 glass-dark flex items-center justify-around px-4 pb-4 z-30">
        <NavItem 
          icon={Home} 
          label="Home" 
          active={activeTab === 'home'} 
          onClick={() => onTabChange('home')} 
        />
        <NavItem 
          icon={Globe} 
          label="Global" 
          active={activeTab === 'global'} 
          onClick={() => onTabChange('global')} 
        />
        <div className="w-14 h-14 -mt-10 glass-dark rounded-full flex items-center justify-center border-4 border-black text-white bg-gradient-to-tr from-neon-purple to-neon-blue shadow-lg shadow-neon-purple/30">
          <Search className="w-6 h-6" />
        </div>
        <NavItem 
          icon={MessageSquare} 
          label="Collab" 
          active={activeTab === 'collab'} 
          onClick={() => onTabChange('collab')} 
        />
        <NavItem 
          icon={Library} 
          label="Library" 
          active={activeTab === 'library'} 
          onClick={() => onTabChange('library')} 
        />
      </nav>
    </div>
  );
};
