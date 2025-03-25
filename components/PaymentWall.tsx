import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';

interface PaymentWallProps {
  onClose: () => void;
  onSuccess: () => void;
}

export default function PaymentWall({ onClose, onSuccess }: PaymentWallProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    onSuccess();
  };

  const features = [
    'Unlimited chat analysis questions',
    'Comprehensive 50-100 line chat summaries',
    'Advanced relationship pattern detection',
    'Detailed topic analysis and insights',
    'Priority support',
  ];

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        <div className="p-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Upgrade to Premium</h2>
            <p className="text-gray-600">
              Unlock the full potential of your chat analysis
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="text-center">
                <span className="text-4xl font-bold">$9.99</span>
                <span className="text-gray-600">/month</span>
              </div>
            </div>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? 'Processing...' : 'Upgrade Now'}
            </button>
            <button
              onClick={onClose}
              className="w-full py-3 px-4 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Maybe Later
            </button>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 text-center text-sm text-gray-500">
          30-day money-back guarantee • Cancel anytime • Secure payment
        </div>
      </motion.div>
    </motion.div>
  );
}
