import React from "react";
import Image from "next/image";

const Tokenomics: React.FC = () => {
  return (
    <section
      id="tokenomics"
      className="min-h-screen flex items-center justify-center bg-black text-yellow-400"
    >
      <div className="max-w-4xl mx-auto p-8">
        <div className="w-full mb-8">
          <Image
            width={1210}
            height={403}
            src="/images/content/tokenomics-with-text.png"
            alt="Hero Image"
            placeholder="blur"
            blurDataURL="/images/content/blurred_tokenomics-with-text.png"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </div>
        <p className="text-xl text-center items-center">
          1,000,000,000,000 MAX SUPPLY
          <br />
          995,995,000,000 CIRCULATING SUPPLY
          <br />
          LP BURNED
        </p>
        <hr />
        <ul className="text-xl text-center items-center">
          <li>TOKENSNIFFER</li>
          <li>BUBBLEMAPS</li>
          <li>CHART</li>
          <li>TOP HOLDERS</li>
          <li>BASESCAN</li>
        </ul>
      </div>
    </section>
  );
};

export default Tokenomics;
