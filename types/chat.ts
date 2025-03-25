export interface Message {
  timestamp: string;
  sender: string;
  content: string;
  type: 'text' | 'media' | 'link' | 'emoji';
}

export interface ChatAnalytics {
  messageCount: {
    total: number;
    byUser: Record<string, number>;
  };
  activityPatterns: {
    byHour: Record<string, number>;
    byDay: Record<string, number>;
  };
  mediaStats: {
    images: number;
    videos: number;
    voice: number;
  };
  emojiStats: Record<string, number>;
  linkStats: {
    total: number;
    domains: Record<string, number>;
  };
}

export interface ChatSummary {
  basic: string;
  premium: string;
}

export interface QAResponse {
  question: string;
  answer: string;
  timestamp: string;
}

export interface UserState {
  remainingQuestions: number;
  isPremium: boolean;
}
