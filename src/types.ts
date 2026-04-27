export type Emotion = 'Comfort' | 'Excitement' | 'Sadness' | 'Motivation' | 'Love' | 'Chill' | 'Hype' | 'Nostalgia';

export interface EmotionTag {
  emotion: Emotion;
  count: number;
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  albumArt: string;
  duration: number;
  emotions: Emotion[];
  bpm: number;
  lyricsSentiment: 'Positive' | 'Neutral' | 'Negative';
  listenerCount: number;
  trendingRank?: number;
}

export interface Translation {
  language: string;
  content: string;
  author: string;
  rating: number;
  votes: number;
}

export interface VideoClip {
  id: string;
  title: string;
  artist: string;
  thumbnail: string;
  translations: Translation[];
}

export interface CountryEmotion {
  country: string;
  dominantEmotion: Emotion;
  intensity: number; // 0-100 for heatmap
  coords: { x: number; y: number }; // Percentage for placement on a simple map
}

export interface Comment {
  id: string;
  user: string;
  avatar: string;
  content: string;
  emotion: Emotion;
  timestamp: string;
  likes: number;
}
