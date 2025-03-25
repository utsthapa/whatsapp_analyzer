import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Product Info */}
          <div className="col-span-2">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              WhatsApp Analyzer
            </h3>
            <p className="text-slate-600 mb-4 max-w-md">
              Transform your WhatsApp conversations into meaningful insights with our
              advanced analytics platform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Contact', path: '/contact' },
                { label: 'Privacy Policy', path: '/privacy' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li>support@whatsappanalyzer.com</li>
              <li>1-800-CHAT-ANALYTICS</li>
              <li>123 Analytics Street</li>
              <li>San Francisco, CA 94105</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-600 text-sm">
              © {currentYear} WhatsApp Analyzer. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
