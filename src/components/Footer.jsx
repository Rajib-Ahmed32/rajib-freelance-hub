import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
        <div className="text-center md:text-left max-w-sm">
          <h3 className="text-2xl font-bold text-white mb-2">
            Rajib Freelance Hub
          </h3>
          <p className="text-sm text-gray-400">
            Connecting freelancers and clients seamlessly for all your project
            needs.
          </p>
        </div>

        <div className="flex space-x-10">
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-green-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/browse-tasks" className="hover:text-green-500 transition">
                  Browse Tasks
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-green-500 transition">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/browse-tasks" className="hover:text-green-500 transition">
                  Help Center
                </Link>
              </li>
              <li>
                <a href="https://www.freeprivacypolicy.com/live/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="https://www.privacypolicies.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex space-x-5 text-gray-400 text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Rajib Freelance Hub. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
