'use client';

import { useState } from 'react';
import FileUpload from '../../components/FileUpload';
import Analytics from '../../components/Analytics';
import Summary from '../../components/Summary';
import QASystem from '../../components/QASystem';
import PaymentWall from '../../components/PaymentWall';
import { getMockAnalytics, getMockSummary, getMockQAResponse } from '../../lib/mockData';
import { ChatAnalytics, ChatSummary, QAResponse, UserState } from '../../types/chat';
import {
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  SparklesIcon,
  LockClosedIcon,
  ArrowTrendingUpIcon,
  DocumentChartBarIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import Layout from '../../components/layout/Layout';

export default function Home() {
  const [analytics, setAnalytics] = useState<ChatAnalytics | null>(null);
  const [summary, setSummary] = useState<ChatSummary | null>(null);
  const [userState, setUserState] = useState<UserState>({
    remainingQuestions: 3,
    isPremium: false,
  });
  const [showPaymentWall, setShowPaymentWall] = useState(false);
  const [activeDemo, setActiveDemo] = useState<'messages' | 'media' | 'activity'>('messages');

  const handleFileSelect = async () => {
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setAnalytics(getMockAnalytics());
    setSummary(getMockSummary());
  };

  const handleAskQuestion = async (question: string): Promise<QAResponse> => {
    if (!userState.isPremium) {
      setUserState(prev => ({
        ...prev,
        remainingQuestions: prev.remainingQuestions - 1,
      }));
    }
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    return getMockQAResponse(question);
  };

  const handleUpgrade = () => {
    setShowPaymentWall(true);
  };

  const handlePaymentSuccess = () => {
    setShowPaymentWall(false);
    setUserState(prev => ({
      ...prev,
      isPremium: true,
    }));
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
    {
      icon: LockClosedIcon,
      title: 'Privacy First',
      description: 'Your data is analyzed locally and never stored on our servers.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Digital Marketing Manager',
      content: 'This tool helped me understand our team\'s communication patterns and improve our workflow. The insights are invaluable!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Software Developer',
      content: 'The analytics are incredibly detailed and the AI summaries save me hours of scrolling through chat history.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Community Manager',
      content: 'Being able to analyze group chat patterns has transformed how we engage with our community members.',
      rating: 4,
    },
  ];

  // Sample data for interactive demos
  const demoData = {
    messages: [
      { name: 'Mon', count: 45 },
      { name: 'Tue', count: 52 },
      { name: 'Wed', count: 38 },
      { name: 'Thu', count: 65 },
      { name: 'Fri', count: 73 },
      { name: 'Sat', count: 48 },
      { name: 'Sun', count: 40 },
    ],
    media: [
      { name: 'Images', value: 45 },
      { name: 'Videos', value: 25 },
      { name: 'Voice', value: 15 },
      { name: 'Documents', value: 10 },
    ],
    activity: [
      { time: '6am', users: 10 },
      { time: '9am', users: 35 },
      { time: '12pm', users: 45 },
      { time: '3pm', users: 30 },
      { time: '6pm', users: 50 },
      { time: '9pm', users: 25 },
      { time: '12am', users: 15 },
    ],
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <Layout>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {!analytics ? (
          <>
            {/* Upload Section - Moved to top */}
            <div className="max-w-2xl mx-auto mb-16 pt-8">
              <FileUpload onFileSelect={handleFileSelect} />
            </div>

            {/* Hero Section */}
            <div className="px-4 py-12 sm:py-16 lg:py-20 text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Unlock Insights from Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">
                  {' '}WhatsApp Chats
                </span>
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto mb-12">
                Transform your conversations into meaningful insights with our advanced analytics platform.
                Discover patterns, analyze trends, and understand your communication better.
              </p>

              {/* Sample Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
                {[
                  { label: 'Messages Analyzed', value: '1M+' },
                  { label: 'Active Users', value: '50K+' },
                  { label: 'Accuracy Rate', value: '99%' },
                  { label: 'Data Points', value: '100+' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-lg shadow-sm p-6 border border-slate-100">
                    <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Interactive Demo Section */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mb-20">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Interactive Demo</h3>
                <div className="flex justify-center gap-4 mb-8">
                  {(['messages', 'media', 'activity'] as const).map((demo) => (
                    <button
                      key={demo}
                      onClick={() => setActiveDemo(demo)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        activeDemo === demo
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {demo.charAt(0).toUpperCase() + demo.slice(1)} Analysis
                    </button>
                  ))}
                </div>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    {activeDemo === 'messages' ? (
                      <BarChart data={demoData.messages}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="#0088FE" />
                      </BarChart>
                    ) : activeDemo === 'media' ? (
                      <PieChart>
                        <Pie
                          data={demoData.media}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          label
                        >
                          {demoData.media.map((entry, index) => (
                            <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    ) : (
                      <BarChart data={demoData.activity}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="users" fill="#00C49F" />
                      </BarChart>
                    )}
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mb-20">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200 border border-slate-100"
                  >
                    <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Testimonials */}
              <div className="bg-gradient-to-b from-slate-50 to-white py-16">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                  What Our Users Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.name}
                      className="bg-white rounded-xl shadow-sm p-6 border border-slate-100"
                    >
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-slate-700 mb-4">{testimonial.content}</p>
                      <div>
                        <p className="font-semibold text-slate-900">{testimonial.name}</p>
                        <p className="text-sm text-slate-600">{testimonial.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* How It Works */}
              <div className="mt-20 text-left">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      step: '01',
                      title: 'Export Your Chat',
                      description: 'Export your WhatsApp chat history as a text file from your phone.',
                    },
                    {
                      step: '02',
                      title: 'Upload & Analyze',
                      description: 'Upload the file to our platform for instant analysis and insights.',
                    },
                    {
                      step: '03',
                      title: 'Explore Insights',
                      description: 'Dive into detailed analytics, summaries, and ask custom questions.',
                    },
                  ].map((item) => (
                    <div key={item.step} className="relative bg-white rounded-xl shadow-sm p-6 border border-slate-100">
                      <div className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="space-y-8">
            <Analytics data={analytics} />
            {summary && (
              <Summary
                summary={summary}
                isPremium={userState.isPremium}
                onUpgradeClick={handleUpgrade}
              />
            )}
            <QASystem
              onAskQuestion={handleAskQuestion}
              remainingQuestions={userState.remainingQuestions}
              isPremium={userState.isPremium}
              onUpgradeClick={handleUpgrade}
            />
          </div>
        )}
      </main>

      {showPaymentWall && (
        <PaymentWall
          onClose={() => setShowPaymentWall(false)}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </Layout>
  );
}
