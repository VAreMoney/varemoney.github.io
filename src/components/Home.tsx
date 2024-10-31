"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Image from "next/image";
import Tooltip from './Tooltip';

const Home: React.FC = () => {
  const contractAddress = "0xA2b9436D567A740357ca432b35582E93191e6a2F";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
  };

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
          <Tooltip text="Click to copy" onCopy={copyToClipboard} showOnClick={true} useDiv={true}>
            <button
              className="copy-button"
              aria-label="Copy token to clipboard"
            >
              CA {contractAddress} <FontAwesomeIcon icon={faCopy} width={24} height={24} />
            </button>
          </Tooltip>

        </div>
        <hr />
        <div className="w-full text-3xl center-content">
          <p className="text-3xl text-center">
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
