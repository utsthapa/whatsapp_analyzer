import { ChatAnalytics } from '../types/chat';
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
import { motion } from 'framer-motion';

interface AnalyticsProps {
  data: ChatAnalytics;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export default function Analytics({ data }: AnalyticsProps) {
  const dailyData = Object.entries(data.activityPatterns.byDay).map(([day, count]) => ({
    day,
    messages: count,
  }));

  const userMessageData = Object.entries(data.messageCount.byUser).map(([user, count]) => ({
    name: user,
    value: count,
  }));

  const mediaData = [
    { name: 'Images', value: data.mediaStats.images },
    { name: 'Videos', value: data.mediaStats.videos },
    { name: 'Voice', value: data.mediaStats.voice },
  ];

  return (
    <motion.div
      className="w-full max-w-7xl mx-auto p-6 space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Message Distribution */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Message Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={userMessageData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {userMessageData.map((entry, index) => (
                    <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Media Statistics */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Media Sharing</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mediaData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {mediaData.map((entry, index) => (
                    <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Daily Activity */}
        <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Daily Activity</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dailyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="messages" fill="#0088FE" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Emoji Usage */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Most Used Emojis</h3>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(data.emojiStats).map(([emoji, count]) => (
              <div key={emoji} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-2xl">{emoji}</span>
                <span className="text-gray-600">{count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Link Statistics */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Link Sharing</h3>
          <div className="space-y-4">
            <p className="text-lg font-medium">Total Links: {data.linkStats.total}</p>
            <div className="space-y-2">
              {Object.entries(data.linkStats.domains).map(([domain, count]) => (
                <div key={domain} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{domain}</span>
                  <span className="text-sm font-medium">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
