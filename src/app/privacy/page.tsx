'use client';

import Link from 'next/link';
import Layout from '../../../components/layout/Layout';
import { motion } from 'framer-motion';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function Privacy() {
  const sections = [
    {
      title: 'Data Processing',
      content: `All chat analysis is performed locally in your browser. Your chat data never leaves your device and is not stored on our servers. The analysis is done using client-side JavaScript, ensuring complete privacy of your conversations.`,
    },
    {
      title: 'Data Collection',
      content: `We do not collect, store, or transmit any of your WhatsApp chat data. The only data we collect is anonymous usage statistics to improve our service.`,
    },
    {
      title: 'Local Storage',
      content: `Any preferences or settings you choose are stored locally on your device using browser storage. This data remains on your device and can be cleared at any time through your browser settings.`,
    },
    {
      title: 'Third-Party Services',
      content: `We do not share any data with third-party services. All processing and analysis are performed using our own algorithms running directly in your browser.`,
    },
    {
      title: 'Security',
      content: `We use industry-standard security measures to protect our website and services. Since we don't store your chat data, there's no risk of data breaches affecting your private conversations.`,
    },
  ];

  return (
    <Layout>
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-6"
            >
              <ShieldCheckIcon className="w-16 h-16 text-blue-600" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold text-slate-900 mb-4"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600"
            >
              Your privacy is our top priority. Learn how we protect your data.
            </motion.p>
          </div>

          {/* Privacy Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 3) }}
                className="bg-white rounded-xl shadow-sm p-6 border border-slate-100"
              >
                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Questions About Our Privacy Policy?
            </h2>
            <p className="text-slate-600 mb-6">
              If you have any questions or concerns about our privacy policy, please
              don&apos;t hesitate to contact us.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
