"use client";
import Link from "next/link";
import Image from "next/image";
import { footerData } from "../app/data";
import { motion } from "framer-motion";

const Footer = () => {
  const { logo, description, links, socialMedia, contactInfo } = footerData;

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ margin: "-200px", once: true }}
      className="bg-gray-900 text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="w-40"
          />
          <p className="text-gray-400">{description}</p>
        </div>

        {/* Quick Links */}
        {links.map((section, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-lg font-semibold">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.url}
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-gray-400">{contactInfo.email}</p>
          <p className="text-gray-400">{contactInfo.phone}</p>
          <p className="text-gray-400">{contactInfo.address}</p>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            {socialMedia.map((social, index) => {
              const { name, icon, url } = social;
              return (
                <Link
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <Image
                    src={icon}
                    alt={name}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 pt-8 border-t border-gray-800">
        <p className="text-gray-400">
          &copy; 2018-{new Date().getFullYear()} Next Design. All rights
          reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
