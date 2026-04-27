import { Song, VideoClip, CountryEmotion, Comment, Emotion } from './types';

export const EMOTIONS: { name: Emotion, icon: string, color: string }[] = [
  { name: 'Comfort', icon: '🫂', color: 'bg-neon-blue' },
  { name: 'Excitement', icon: '⚡', color: 'bg-neon-pink' },
  { name: 'Sadness', icon: '😭', color: 'bg-neon-cyan' },
  { name: 'Motivation', icon: '🔥', color: 'bg-neon-purple' },
  { name: 'Love', icon: '❤️', color: 'bg-rose-500' },
  { name: 'Chill', icon: '🌙', color: 'bg-emerald-500' },
  { name: 'Hype', icon: '🕺', color: 'bg-amber-500' },
  { name: 'Nostalgia', icon: '📺', color: 'bg-indigo-500' },
];

export const MOCK_SONGS: Song[] = [
  {
    id: '1',
    title: 'Ditto',
    artist: 'NewJeans',
    albumArt: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=300&h=300',
    duration: 186,
    emotions: ['Nostalgia', 'Comfort'],
    bpm: 130,
    lyricsSentiment: 'Neutral',
    listenerCount: 124500,
    trendingRank: 1
  },
  {
    id: '2',
    title: 'Super Shy',
    artist: 'NewJeans',
    albumArt: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=300&h=300',
    duration: 154,
    emotions: ['Excitement', 'Love'],
    bpm: 150,
    lyricsSentiment: 'Positive',
    listenerCount: 98000,
    trendingRank: 2
  },
  {
    id: '3',
    title: 'Magnetic',
    artist: 'ILLIT',
    albumArt: 'https://images.unsplash.com/photo-1459749411177-042180ceea72?auto=format&fit=crop&q=80&w=300&h=300',
    duration: 160,
    emotions: ['Excitement', 'Hype'],
    bpm: 140,
    lyricsSentiment: 'Positive',
    listenerCount: 85000,
    trendingRank: 3
  },
  {
    id: '4',
    title: 'Love Wins All',
    artist: 'IU',
    albumArt: 'https://images.unsplash.com/photo-1514525253361-bee8d4c7987b?auto=format&fit=crop&q=80&w=300&h=300',
    duration: 250,
    emotions: ['Sadness', 'Love'],
    bpm: 72,
    lyricsSentiment: 'Positive',
    listenerCount: 72000
  },
  {
    id: '5',
    title: 'Seven',
    artist: 'Jungkook',
    albumArt: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=300&h=300',
    duration: 184,
    emotions: ['Hype', 'Motivation'],
    bpm: 125,
    lyricsSentiment: 'Positive',
    listenerCount: 156000
  }
];

export const MOCK_VIDEOS: VideoClip[] = [
  {
    id: 'v1',
    title: 'NewJeans (뉴진스) \'Ditto\' Official MV',
    artist: 'NewJeans',
    thumbnail: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=800&h=450',
    translations: [
      { language: 'English', content: 'Stay in the middle / Like you a little / Don\'t want no riddle...', author: 'KPopLover88', rating: 4.8, votes: 1250 },
      { language: 'Spanish', content: 'Quédate en el medio / Me gustas un poco / No quiero acertijos...', author: 'CarlosJ', rating: 4.5, votes: 450 }
    ]
  }
];

export const MOCK_COMMENTS: Comment[] = [
  {
    id: 'c1',
    user: 'MinjiFans',
    avatar: 'https://i.pravatar.cc/150?u=c1',
    content: 'The bridge of this song always makes me tear up 😭 The nostalgia is real.',
    emotion: 'Nostalgia',
    timestamp: '2m ago',
    likes: 850
  },
  {
    id: 'c2',
    user: 'GlobalARMY',
    avatar: 'https://i.pravatar.cc/150?u=c2',
    content: 'THIS IS A BOP! 🔥 Putting it on my workout playlist.',
    emotion: 'Motivation',
    timestamp: '5m ago',
    likes: 1200
  },
  {
    id: 'c3',
    user: 'ChillVibesOnly',
    avatar: 'https://i.pravatar.cc/150?u=c3',
    content: 'Perfect song for a rainy day. So comforting.',
    emotion: 'Comfort',
    timestamp: '15m ago',
    likes: 420
  }
];

export const MOCK_MAP_DATA: CountryEmotion[] = [
  { country: 'South Korea', dominantEmotion: 'Nostalgia', intensity: 85, coords: { x: 80, y: 35 } },
  { country: 'USA', dominantEmotion: 'Excitement', intensity: 75, coords: { x: 20, y: 35 } },
  { country: 'Brazil', dominantEmotion: 'Hype', intensity: 90, coords: { x: 30, y: 70 } },
  { country: 'Japan', dominantEmotion: 'Love', intensity: 70, coords: { x: 85, y: 35 } },
  { country: 'France', dominantEmotion: 'Chill', intensity: 65, coords: { x: 48, y: 30 } },
  { country: 'Thailand', dominantEmotion: 'Hype', intensity: 95, coords: { x: 75, y: 55 } },
];
