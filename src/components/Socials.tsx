import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faXTwitter,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { TelegramIcon } from "./icons/TelegramIcon";
import Image from "next/image";

const Socials: React.FC = () => {
  const [twitterIcon, setTwitterIcon] = useState(faXTwitter);

  return (
    <section
      id="socials"
      className="min-h-screen flex items-center justify-center bg-black text-yellow-400"
    >
      <div className="max-w-4xl mx-auto p-8">
        <div className="w-full mb-8">
          <Image
            width={1210}
            height={403}
            src="/images/content/socials-with-text.png"
            alt="Hero Image"
            placeholder="blur"
            blurDataURL="/images/content/blurred_socials-with-text.png"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </div>
        <div className="socials-content">
          <div className="text-xl flex justify-center items-center space-x-4 py-10 my-5">
            <a href="https://www.tiktok.com/@v_are_money" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} className="transition-transform duration-300 ease-in-out hover:scale-110" />
            </a>
            <a href="https://x.com/varemoney" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={twitterIcon}
                onMouseEnter={() => setTwitterIcon(faTwitter)}
                onMouseLeave={() => setTwitterIcon(faXTwitter)}
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </a>
            <a href="https://t.me/varemoney" target="_blank" rel="noopener noreferrer">
              <TelegramIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;
