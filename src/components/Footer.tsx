"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <section
      id="footer"
      className="min-h-screen flex items-center justify-center bg-black text-yellow-400"
    >
      <footer className="w-full mt-8">
        <hr className="border-t border-gray-300" />
        <div className="container mx-auto px-4 py-6 center-content">
          <p className="text-center text-gray-600">
            Official Degen Studios Token
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
