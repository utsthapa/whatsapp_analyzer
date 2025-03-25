'use client';

import { useEffect, useState } from 'react';
import Layout from '../../../components/layout/Layout';
import Analytics from '../../../components/Analytics';
import Summary from '../../../components/Summary';
import QASystem from '../../../components/QASystem';
import PaymentWall from '../../../components/PaymentWall';
import { getMockAnalytics, getMockSummary, getMockQAResponse } from '../../../lib/mockData';
import { ChatAnalytics, ChatSummary, QAResponse, UserState } from '../../../types/chat';

export default function AnalyzePage() {
  const [analytics, setAnalytics] = useState<ChatAnalytics | null>(null);
  const [summary, setSummary] = useState<ChatSummary | null>(null);
  const [userState, setUserState] = useState<UserState>({
    remainingQuestions: 3,
    isPremium: false,
  });
  const [showPaymentWall, setShowPaymentWall] = useState(false);

  useEffect(() => {
    // For demo, we'll load mock data immediately
    setAnalytics(getMockAnalytics());
    setSummary(getMockSummary());
  }, []);

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

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-8">
        <Analytics data={analytics!} />
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

      {showPaymentWall && (
        <PaymentWall
          onClose={() => setShowPaymentWall(false)}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </Layout>
  );
}
