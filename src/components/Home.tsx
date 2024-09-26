"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useCallback } from "react";
import Image from "next/image";

const Home: React.FC = () => {
  const [tooltipText, setTooltipText] = useState("Click to copy");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const contractAddress = "0xA2b9436D567A740357ca432b35582E93191e6a2F";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setTooltipText("Copied!");
      setTimeout(() => {
        setTooltipText("Click to copy");
      }, 2000);
    });
  };

  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-yellow"
    >
      <div className="w-full max-w-4xl mx-auto p-8 flex flex-col items-center">
        <div className="w-full mb-8">
          <Image
            width={1210}
            height={403}
            src="/images/content/welcome.png"
            alt="Hero Image"
            placeholder="blur"
            blurDataURL="/images/content/blurred_welcome.png"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </div>
        <h1>v are the original</h1>
        <div className="w-full center-content m-5 p-5">
          <button
            className="copy-button"
            onClick={copyToClipboard}
            onMouseMove={handleMouseMove}
            aria-label="Copy token to clipboard"
          >
            CA {contractAddress} <FontAwesomeIcon icon={faCopy} width={24} height={24} />
            <span
              className="tooltip"
              style={{
                left: `${tooltipPosition.x}px`,
                top: `${tooltipPosition.y - 30}px`,
                transform: 'translateX(-50%)',
              }}
            >
              {tooltipText}
            </span>
          </button>
        </div>
        <hr className="w-full my-6" />
        <div className="w-full center-content">
          <p className="text-xl text-center">
            Stand with us, be the spark
            <br />
            In this revolution&apos;s arc,
            <br />
            A new era is in sight,
            <br />
            Join the movement, claim your right.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
