import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-6 w-full">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h4 className="font-bold text-xl mb-2">Contact Me</h4>
          <p>
            Email:{" "}
            <a href="mailto:sanioriginal@gmail.com" className="text-blue-400 hover:underline">
              sanioriginal@gmail.com
            </a>
          </p>
        </div>
        <div className="mb-4">
          <h4 className="font-bold text-xl mb-2">Follow Me</h4>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com/your-username" className="text-blue-400 hover:text-blue-500" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com/your-username" className="text-blue-400 hover:text-blue-500" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="https://youtube.com/your-username" className="text-blue-400 hover:text-blue-500" aria-label="YouTube">
              <FaYoutube size={24} />
            </a>
            <a href="https://telegram.me/your-username" className="text-blue-400 hover:text-blue-500" aria-label="Telegram">
              <FaTelegramPlane size={24} />
            </a>
          </div>
        </div>
        <div>
          <p>&copy; 2024 Fatuh Sani Ansori. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;