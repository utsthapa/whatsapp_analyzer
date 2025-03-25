'use client';

import Layout from '../../../components/layout/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  SparklesIcon,
  ChatBubbleBottomCenterTextIcon,
  ChartBarIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';

export default function About() {
  const features = [
    {
      icon: SparklesIcon,
      title: 'Advanced AI Analysis',
      description:
        'Our platform leverages cutting-edge AI models to analyze your chat patterns and provide meaningful insights.',
    },
    {
      icon: ChatBubbleBottomCenterTextIcon,
      title: 'Interactive Chat Interface',
      description:
        'Ask questions about your chat history and receive intelligent responses powered by our AI system.',
    },
    {
      icon: ChartBarIcon,
      title: 'Data Visualization',
      description:
        'Transform complex chat data into beautiful, easy-to-understand visualizations and insights.',
    },
    {
      icon: LightBulbIcon,
      title: 'Smart Recommendations',
      description:
        'Get personalized recommendations and insights to improve your communication patterns.',
    },
  ];

  return (
    <Layout>
      <div className="py-12 sm:py-16 lg:py-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
          >
            Powered by Advanced AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Our platform uses state-of-the-art artificial intelligence to analyze
            your WhatsApp chats, providing deep insights and enabling natural
            conversations about your chat history.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm p-6 border border-slate-100"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Try It Out Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Try It Out?</h2>
            <p className="text-lg mb-6 text-blue-100">
              Upload your chat export and start exploring insights powered by AI.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Analyze Your Chat
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
