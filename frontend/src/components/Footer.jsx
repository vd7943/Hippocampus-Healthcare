import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { FaPhoneAlt, FaBusinessTime } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#226930] text-white">
      <div className="mx-auto px-10 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl lg:text-2xl font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-md lg:text-lg">
            <li>
              <Link
                to="/"
                className="cursor-pointer hover:text-[#b6ff8b] hover:translate-x-1 transition-all duration-200 inline-block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="cursor-pointer hover:text-[#b6ff8b] hover:translate-x-1 transition-all duration-200 inline-block"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="cursor-pointer hover:text-[#b6ff8b] hover:translate-x-1 transition-all duration-200 inline-block"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="cursor-pointer hover:text-[#b6ff8b] hover:translate-x-1 transition-all duration-200 inline-block"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="cursor-pointer hover:text-[#b6ff8b] hover:translate-x-1 transition-all duration-200 inline-block"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="cursor-pointer hover:text-[#b6ff8b] hover:translate-x-1 transition-all duration-200 inline-block"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl lg:text-2xl font-semibold mb-4">Account</h3>
          <ul className="space-y-2 text-md lg:text-lg">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Affiliate Services</li>
            <li>Help & Support</li>
            <li>Frequently Asked Questions</li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <h3 className="text-xl lg:text-2xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-md lg:text-lg">
            <li className="flex items-center space-x-3">
              <FaPhoneAlt className="text-xl" />
              <span>
                9886272072 <span className="text-sm">(Call Free)</span>
              </span>
            </li>

            <li className="flex items-center space-x-2">
              <span className="text-xl">📧</span>
              <a
                href="mailto:sales@hippocampushealthcare.com"
                className="hover:underline"
              >
                sales@hippocampushealthcare.com
              </a>
            </li>

            <li className="flex items-center space-x-3">
              <FaBusinessTime className="text-xl" />
              <span>Mon - Sat: 9:00 AM – 8:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto px-10 pb-8">
        <h3 className="text-lg lg:text-2xl font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a
            href="#"
            className="p-2 bg-white rounded-full transition-transform duration-300 hover:scale-110"
            title="Facebook"
          >
            <FaFacebookF className="text-[#1877F2] text-xl" />
          </a>
          <a
            href="#"
            className="p-2 bg-white rounded-full transition-transform duration-300 hover:scale-110"
            title="Twitter"
          >
            <FaXTwitter className="text-black text-xl" />
          </a>
          <a
            href="#"
            className="p-2 bg-white rounded-full transition-transform duration-300 hover:scale-110"
            title="Instagram"
          >
            <FaInstagram className="text-[#E4405F] text-xl" />
          </a>
          <a
            href="#"
            className="p-2 bg-white rounded-full transition-transform duration-300 hover:scale-110"
            title="LinkedIn"
          >
            <FaLinkedinIn className="text-[#0A66C2] text-xl" />
          </a>
          <a
            href="#"
            className="p-2 bg-white rounded-full transition-transform duration-300 hover:scale-110"
            title="YouTube"
          >
            <FaYoutube className="text-[#FF0000] text-xl" />
          </a>
        </div>
      </div>

      <div className="bg-[#184e25] py-3 text-center text-sm md:text-md">
        <p>
          © {new Date().getFullYear()} Hippocampus Health Care. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
