import React from "react";
import Image from "next/image";
import { UniswapIcon, MatchaIcon, FloozIcon } from "./icons/DexIcons";
import Tooltip from "./Tooltip";

const Buy: React.FC = () => {
  return (
    <section
      id="buy"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="w-full my-8">
        <Image
          width={1210}
          height={403}
          src="/images/content/buy-with-text.png"
          alt="Hero Image"
          placeholder="blur"
          blurDataURL="/images/content/blurred_buy-with-text.png"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
      </div>
      <div className="buy-content">
        <ul>
          <li>
            <Tooltip text="Uniswap">
              <a
                href="https://app.uniswap.org/explore/tokens/base/0xa2b9436d567a740357ca432b35582e93191e6a2f?chain=base&inputCurrency=NATIVE"
                rel="noopener noreferrer"
                target="_blank"
              >
                <UniswapIcon />
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip text="Flooz">
              <a href="https://flooz.xyz/trade/0xa2b9436d567a740357ca432b35582e93191e6a2f/base/v-are-money/v" target="_blank">
                <FloozIcon />
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip text="Matcha">
              <a
                href="https://matcha.xyz/tokens/base/0xa2b9436d567a740357ca432b35582e93191e6a2f?sellChain=8453&sellAddress=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
                rel="noopener noreferrer"
                target="_blank"
              >
                <MatchaIcon />
              </a>
            </Tooltip>
          </li>
        </ul>
      </div>
    </section >
  );
};

export default Buy;
