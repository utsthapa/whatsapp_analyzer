'use client';

import { useRouter } from 'next/navigation';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  SparklesIcon,
  DocumentChartBarIcon,
  ArrowTrendingUpIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

export default function Home() {
  const router = useRouter();

  const handleStartAnalysis = () => {
    router.push('/analyze');
  };

  const features = [
    {
      icon: ChartBarIcon,
      title: 'Advanced Analytics',
      description: 'Get detailed insights into message patterns, activity times, and communication trends.',
    },
    {
      icon: ChatBubbleBottomCenterTextIcon,
      title: 'Smart Summaries',
      description: 'AI-powered analysis of your conversations, highlighting key moments and patterns.',
    },
    {
      icon: SparklesIcon,
      title: 'Interactive Q&A',
      description: 'Ask specific questions about your chat history and get instant, intelligent answers.',
    },
    {
      icon: DocumentChartBarIcon,
      title: 'Media Analysis',
      description: 'Track shared media, links, and emoji usage patterns in your conversations.',
    },
    {
      icon: ArrowTrendingUpIcon,
      title: 'Trend Detection',
      description: 'Identify communication patterns and relationship dynamics over time.',
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
        {/* Hero Section */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
              >
                Analyze Your WhatsApp Chats with AI
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-600 max-w-3xl mx-auto mb-12"
              >
                Discover insights about your conversations using advanced AI analysis.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center"
              >
                <button
                  onClick={handleStartAnalysis}
                  className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Start Analysis
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 3) }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-slate-100"
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
        </div>
      </div>
    </Layout>
  );
}
