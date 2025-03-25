import { ChatAnalytics, ChatSummary, QAResponse } from '../types/chat';

export const getMockAnalytics = (): ChatAnalytics => ({
  messageCount: {
    total: 1547,
    byUser: {
      'Alice': 789,
      'Bob': 758,
    },
  },
  activityPatterns: {
    byHour: {
      '00': 45, '01': 23, '02': 12, '03': 8, '04': 5,
      '05': 3, '06': 15, '07': 67, '08': 134, '09': 156,
      '10': 178, '11': 189, '12': 201, '13': 167, '14': 145,
      '15': 134, '16': 123, '17': 112, '18': 98, '19': 87,
      '20': 76, '21': 65, '22': 54, '23': 34,
    },
    byDay: {
      'Monday': 245,
      'Tuesday': 234,
      'Wednesday': 267,
      'Thursday': 289,
      'Friday': 312,
      'Saturday': 156,
      'Sunday': 144,
    },
  },
  mediaStats: {
    images: 234,
    videos: 45,
    voice: 23,
  },
  emojiStats: {
    '😊': 145,
    '❤️': 123,
    '😂': 98,
    '👍': 87,
    '🎉': 65,
  },
  linkStats: {
    total: 167,
    domains: {
      'youtube.com': 45,
      'instagram.com': 34,
      'twitter.com': 28,
      'other': 60,
    },
  },
});

export const getMockSummary = (): ChatSummary => ({
  basic: `Your chat history spans 3 months with 1,547 messages exchanged. Alice and Bob maintain an active conversation, sharing frequently in the afternoons. The chat includes 234 images and 45 videos, showing a preference for visual communication. Peak activity occurs during weekdays, especially Fridays.`,
  premium: `Detailed analysis reveals a strong friendship pattern with balanced participation (Alice: 51%, Bob: 49%). Communication peaks between 12-2 PM, suggesting lunch break conversations. Media sharing increases on weekends, with memes and personal photos being most common. Conversation topics frequently include planning meetups, sharing daily experiences, and discussing shared interests in music and movies. The use of emojis (especially 😊 and ❤️) indicates a positive, warm relationship dynamic.`,
});

export const getMockQAResponse = (question: string): QAResponse => {
  const responses: Record<string, string> = {
    'Who initiates conversations more often?': 'Based on the analysis, Alice slightly leads in conversation initiation, starting 52% of daily chats compared to Bob\'s 48%. This suggests a well-balanced dynamic between both participants.',
    'What topics do we talk about the most?': 'The most frequent topics include daily activities, shared interests in entertainment (movies/music), and future plans. There\'s a notable pattern of sharing memes and discussing current events.',
    'When are we most active in our conversations?': 'Peak activity occurs during weekday afternoons, particularly between 12-2 PM. Fridays show the highest engagement, while weekend activity is more sporadic but involves more media sharing.',
    'How has our communication changed over time?': 'Over the analyzed period, your communication has maintained consistent frequency with a slight increase in media sharing. The conversation style has evolved to include more emoji usage and voice messages.',
  };

  return {
    question,
    answer: responses[question] || 'I apologize, but I don\'t have enough context to answer this specific question accurately.',
    timestamp: new Date().toISOString(),
  };
};
