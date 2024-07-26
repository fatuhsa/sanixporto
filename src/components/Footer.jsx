import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-6 w-full">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h4 className="font-bold text-xl mb-2">Contact Me</h4>
          <p>
            Email:{" "}
            <a
              href="mailto:sanioriginal@gmail.com"
              className="text-blue-400 hover:underline"
            >
              sanioriginal@gmail.com
            </a>
          </p>
        </div>
        <div className="mb-4">
          <h4 className="font-bold text-xl mb-2">Follow Me</h4>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/sanixitd"
              className="text-blue-400 hover:text-blue-500"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/vinsmokesani22"
              className="text-blue-400 hover:text-blue-500"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://youtube.com/@sanimonid"
              className="text-blue-400 hover:text-blue-500"
              aria-label="YouTube"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://t.me/suradirajayadiningrat"
              className="text-blue-400 hover:text-blue-500"
              aria-label="Telegram"
            >
              <FaTelegramPlane size={24} />
            </a>
          </div>
        </div>
        <div>
          <p>&copy; Made with♥ by SaniX </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
