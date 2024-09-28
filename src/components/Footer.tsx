"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <section
      id="buy"
      className="min-h-screen flex items-center justify-center bg-black text-yellow-400"
    >
      <footer>
        <hr />
        <div className="footer-content">
          Off<span>i</span>cial <a href="https://degenstudios.media" target="_blank" rel="noopener noreferrer">Degen Studios</a> Token
        </div>
      </footer>
    </section>
  );
};

export default Footer;
