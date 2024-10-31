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
        <div className="tokenomics-content">
          <p>
            1,000,000,000,000 MAX SUPPLY
            <br />
            995,995,000,000 CIRCULATING SUPPLY
            <br />
            LP BURNED
          </p>
          <hr className="tokenomics-content" />
          <ul>
            <li>
              <a href="https://tokensniffer.com/token/base/89enjphs0k2c1ekcq9qsx0cd41qb89s0n8ijf0113vnahpg086h6a4gk9nuz" target="_blank" rel="noopener noreferrer">
                TOKENSNIFFER
              </a>
            </li>
            <li>
              <a href="https://app.bubblemaps.io/base/token/0xa2b9436d567a740357ca432b35582e93191e6a2f" target="_blank" rel="noopener noreferrer">
                BUBBLEMAPS
              </a>
            </li>
            <li>
              <a href="https://dexscreener.com/base/0xfca463ffce3e9528253a545a3358bba848cabc48" target="_blank" rel="noopener noreferrer">
                CHART
              </a>
            </li>
            <li>
              <a href="https://basescan.org/token/0xa2b9436d567a740357ca432b35582e93191e6a2f#balances" target="_blank" rel="noopener noreferrer">
                TOP HOLDERS
              </a>
            </li>
            <li>
              <a href="https://basescan.org/token/0xa2b9436d567a740357ca432b35582e93191e6a2f" target="_blank" rel="noopener noreferrer">
                BASESCAN
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section >
  );
};

export default Tokenomics;
