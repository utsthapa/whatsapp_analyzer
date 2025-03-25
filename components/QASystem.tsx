import { useState } from 'react';
import { motion } from 'framer-motion';
import { QAResponse } from '../types/chat';
import { LockClosedIcon } from '@heroicons/react/24/outline';

interface QASystemProps {
  onAskQuestion: (question: string) => Promise<QAResponse>;
  remainingQuestions: number;
  isPremium: boolean;
  onUpgradeClick: () => void;
}

const SAMPLE_QUESTIONS = [
  'Who initiates conversations more often?',
  'What topics do we talk about the most?',
  'When are we most active in our conversations?',
  'How has our communication changed over time?',
];

export default function QASystem({
  onAskQuestion,
  remainingQuestions,
  isPremium,
  onUpgradeClick,
}: QASystemProps) {
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [responses, setResponses] = useState<QAResponse[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || (remainingQuestions === 0 && !isPremium)) return;

    setIsLoading(true);
    try {
      const response = await onAskQuestion(question);
      setResponses(prev => [response, ...prev]);
      setQuestion('');
    } catch (error) {
      console.error('Failed to get response:', error);
    }
    setIsLoading(false);
  };

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Ask Questions About Your Chat</h3>
          {!isPremium && (
            <div className="text-sm text-gray-600">
              {remainingQuestions} free questions remaining
            </div>
          )}
        </div>

        {/* Question Form */}
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question here..."
              className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={remainingQuestions === 0 && !isPremium}
            />
            <button
              type="submit"
              disabled={!question.trim() || isLoading || (remainingQuestions === 0 && !isPremium)}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {isLoading ? 'Thinking...' : 'Ask'}
            </button>
          </div>
        </form>

        {/* Sample Questions */}
        {responses.length === 0 && (
          <div className="mb-8">
            <h4 className="text-sm font-medium text-gray-600 mb-3">Try asking:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {SAMPLE_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => setQuestion(q)}
                  disabled={remainingQuestions === 0 && !isPremium}
                  className="text-left p-3 text-sm text-gray-700 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Responses */}
        <div className="space-y-6">
          {responses.map((response, index) => (
            <motion.div
              key={response.timestamp}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-4"
            >
              <p className="font-medium text-gray-800 mb-2">{response.question}</p>
              <p className="text-gray-600">{response.answer}</p>
              <p className="text-xs text-gray-400 mt-2">
                {new Date(response.timestamp).toLocaleString()}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Premium Upgrade Banner */}
        {!isPremium && remainingQuestions === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold mb-2">
                  Unlock Unlimited Questions
                </h4>
                <p className="text-gray-600">
                  Upgrade to premium for unlimited chat analysis and insights.
                </p>
              </div>
              <button
                onClick={onUpgradeClick}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md hover:from-purple-700 hover:to-blue-700 transition-colors duration-200 flex items-center gap-2"
              >
                <LockClosedIcon className="w-5 h-5" />
                Upgrade Now
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
