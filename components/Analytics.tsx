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
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Message Distribution</h3>
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
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Media Sharing</h3>
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
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Daily Activity</h3>
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

        {/* Most Used Emojis */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Most Used Emojis</h3>
          <div className="space-y-4">
            {Object.entries(data.emojiStats).map(([emoji, count]) => (
              <div key={emoji} className="flex items-center justify-between">
                <span className="text-2xl">{emoji}</span>
                <span className="text-slate-600">{count} times</span>
              </div>
            ))}
          </div>
        </div>

        {/* Link Sharing */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Link Sharing</h3>
          <div className="text-slate-600">
            <p className="text-lg mb-2">
              Total Links: <span className="font-semibold text-slate-900">{data.linkStats.total}</span>
            </p>
            <div className="space-y-2">
              {Object.entries(data.linkStats.domains).map(([domain, count]) => (
                <div key={domain} className="flex justify-between">
                  <span>{domain}</span>
                  <span className="font-medium text-slate-900">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
