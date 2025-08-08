import React from "react";
import { Linkedin, Facebook, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center space-y-6">

        {/* Logo / Brand Name */}
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide bg-gradient-to-r from-white to-blue-100 text-transparent bg-clip-text">
          CincoByte
        </h2>

        {/* Mission Statement */}
        <p className="text-white text-sm md:text-base max-w-xl">
          Delivering value in every byte. At CincoByte, we are committed to providing top-notch digital solutions that drive innovation and quality at every level.
        </p>

        {/* Social Links */}
        <div className="flex gap-6 mt-4">
          <a
            href="mailto:cincobyteofficial@gmail.com"
            aria-label="Email"
            className="hover:text-yellow-300 transition duration-300"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://www.instagram.com/cincobyte_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-yellow-300 transition duration-300"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/cincobyte/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-yellow-300 transition duration-300"
          >
            <Linkedin size={24} />
          </a>
        </div>

        {/* Footer Details */}
        <div className="text-sm text-blue-100 mt-4">
          <p>&copy; {new Date().getFullYear()} CincoByte. All rights reserved.</p>
          <p>
            Contact us at{" "}
            <a
              href="mailto:cincobyteofficial@gmail.com"
              className="underline hover:text-white"
            >
              cincobyteofficial@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
