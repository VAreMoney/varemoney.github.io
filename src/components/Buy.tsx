import React from "react";
import Image from "next/image";

const Buy: React.FC = () => {
  return (
    <section
      id="buy"
      className="min-h-screen flex items-center justify-center bg-black text-yellow-400"
    >
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-6xl font-bold mb-6">where to buy</h1>
        <p className="text-xl">
          <a
            href="https://app.uniswap.org/explore/tokens/base/0xa2b9436d567a740357ca432b35582e93191e6a2f"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/images/dex-icons/uniswap.svg"
              alt="Uniswap"
              width={100}
              height={100}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </a>
          <a
            href="https://matcha.xyz/tokens/base/0xa2b9436d567a740357ca432b35582e93191e6a2f?sellChain=8453"
            rel="noopener noreferrer"
            target="_blank"
          >
            Matcha
          </a>
        </p>
      </div>
    </section>
  );
};

export default Buy;
