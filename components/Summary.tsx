import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChatSummary } from '../types/chat';
import { LockClosedIcon } from '@heroicons/react/24/solid';

interface SummaryProps {
  summary: ChatSummary;
  isPremium: boolean;
  onUpgradeClick: () => void;
}

export default function Summary({ summary, isPremium, onUpgradeClick }: SummaryProps) {
  const [showPremiumPreview, setShowPremiumPreview] = useState(false);

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto p-6 space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Basic Summary */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Basic Summary</h3>
        <p className="text-gray-700 leading-relaxed">{summary.basic}</p>
      </div>

      {/* Premium Summary */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg shadow p-6 relative overflow-hidden">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold">Premium Analysis</h3>
          {!isPremium && (
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm">
              Premium
            </span>
          )}
        </div>

        {isPremium ? (
          <p className="text-gray-700 leading-relaxed">{summary.premium}</p>
        ) : (
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              {showPremiumPreview
                ? summary.premium.slice(0, 100) + '...'
                : 'Unlock our comprehensive analysis for deeper insights into your chat patterns and relationship dynamics.'}
            </p>
            
            <div className="mt-6 space-y-4">
              <button
                onClick={() => setShowPremiumPreview(!showPremiumPreview)}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                {showPremiumPreview ? 'Show Less' : 'Preview Premium Analysis'}
              </button>
              
              <button
                onClick={onUpgradeClick}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-md hover:from-purple-700 hover:to-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <LockClosedIcon className="w-4 h-4" />
                <span>Upgrade to Premium</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
