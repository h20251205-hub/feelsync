import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MOCK_VIDEOS, MOCK_COMMENTS, EMOTIONS } from '../mockData';
import { SectionHeader } from '../components/UI';
import { Edit3, Check, ThumbsUp, MessageSquare, Plus, Lock } from 'lucide-react';

export const CollabScreen = () => {
  const video = MOCK_VIDEOS[0];
  const [selectedLang, setSelectedLang] = useState('English');
  const [filterEmotion, setFilterEmotion] = useState<string | null>(null);

  const filteredComments = filterEmotion 
    ? MOCK_COMMENTS.filter(c => c.emotion === filterEmotion)
    : MOCK_COMMENTS;

  return (
    <div className="pt-12">
      <div className="px-6 mb-8">
        <h1 className="text-2xl font-display font-bold">Collab Studio</h1>
        <p className="text-sm text-white/50">Fan-powered translations & shared reactions.</p>
      </div>

      {/* Video Preview */}
      <div className="px-6 mb-8">
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-white/5 border border-white/10 group cursor-pointer">
          <img src={video.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full glass border-2 border-white/40 flex items-center justify-center">
              <Plus className="w-8 h-8 text-white" />
            </div>
          </div>
          
          {/* Subtitle Overlay Mockup */}
          <div className="absolute bottom-4 inset-x-0 flex justify-center px-8">
            <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-center">
              <p className="text-xs text-white/90">Stay in the middle, like you a little...</p>
              <div className="flex items-center justify-center gap-1 mt-1">
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-[8px] text-white/40 uppercase tracking-widest font-bold">Verified by 1.2k Fans</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-lg">{video.title}</h3>
          <p className="text-xs text-white/40 font-bold uppercase tracking-widest">{video.artist}</p>
        </div>
      </div>

      {/* Translation Sync */}
      <div className="px-6 mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Fan Translations</h2>
          <button className="flex items-center gap-2 text-xs text-neon-purple font-bold">
            <Edit3 className="w-4 h-4" />
            Join Sync
          </button>
        </div>
        
        <div className="space-y-4">
           {video.translations.map(t => (
             <div key={t.language} className={`p-4 rounded-2xl border transition-all ${selectedLang === t.language ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/5'}`} onClick={() => setSelectedLang(t.language)}>
               <div className="flex items-center justify-between mb-2">
                 <span className="text-sm font-bold">{t.language}</span>
                 <div className="flex items-center gap-1">
                   <ThumbsUp className="w-3 h-3 text-white/40" />
                   <span className="text-[10px] text-white/40">{t.votes}</span>
                 </div>
               </div>
               <p className="text-xs text-white/60 line-clamp-2 italic mb-2">"{t.content}"</p>
               <div className="flex items-center justify-between">
                 <span className="text-[9px] text-white/40 font-bold uppercase tracking-widest">By {t.author}</span>
                 {[...Array(5)].map((_, i) => (
                   <span key={i} className={`text-xs ${i < Math.floor(t.rating) ? 'text-amber-400' : 'text-white/20'}`}>★</span>
                 ))}
               </div>
             </div>
           ))}
        </div>
      </div>

      {/* Emotion Comments */}
      <div className="px-6 mb-10">
        <SectionHeader title="Emotional Pulse Comments" />
        
        {/* Emotion Filter */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar mb-6">
          <button 
            onClick={() => setFilterEmotion(null)}
            className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all ${!filterEmotion ? 'bg-white text-black border-white' : 'bg-white/5 text-white/40 border-white/10'}`}
          >
            All
          </button>
          {EMOTIONS.slice(0, 4).map(e => (
            <button 
              key={e.name}
              onClick={() => setFilterEmotion(e.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all ${filterEmotion === e.name ? `${e.color} text-white border-transparent` : 'bg-white/5 text-white/40 border-white/10'}`}
            >
              <span>{e.icon}</span>
              <span>{e.name}</span>
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filteredComments.map(comment => (
            <div key={comment.id} className="flex gap-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <img src={comment.avatar} alt={comment.user} className="w-full h-full object-cover" />
                <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full ${EMOTIONS.find(e => e.name === comment.emotion)?.color} flex items-center justify-center text-[10px] border-2 border-black`}>
                  {EMOTIONS.find(e => e.name === comment.emotion)?.icon}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm">{comment.user}</span>
                  <span className="text-[10px] text-white/30">{comment.timestamp}</span>
                </div>
                <p className="text-sm text-white/70 mb-2 leading-relaxed">
                  {comment.content}
                </p>
                <div className="flex items-center gap-4">
                   <button className="flex items-center gap-1.5 text-[10px] text-white/40 font-bold uppercase tracking-widest">
                      <ThumbsUp className="w-3 h-3" />
                      {comment.likes}
                   </button>
                   <button className="flex items-center gap-1.5 text-[10px] text-white/40 font-bold uppercase tracking-widest">
                      <MessageSquare className="w-3 h-3" />
                      Reply
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
