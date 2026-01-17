import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Logo />
              <h2 className="text-xl font-bold bg-linear-to-r from-sky-700 to-blue-900 bg-clip-text text-transparent">
                Serveon
              </h2>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              Serveon connects customers with trusted service providers for
              everyday needs — fast, reliable, and hassle-free.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-sky-700"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="text-gray-600 hover:text-sky-700"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/providers"
                  className="text-gray-600 hover:text-sky-700"
                >
                  Providers
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-600 hover:text-sky-700"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-sky-700">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-sky-700"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-600 hover:text-sky-700"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-sky-700">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-600 hover:text-sky-700"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-gray-600 hover:text-sky-700">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-10 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Serveon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
