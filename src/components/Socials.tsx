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
      className="min-h-screen flex items-center justify-center bg-black"
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
          <ul>
            <li>
              <a href="https://www.tiktok.com/@v_are_money" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </li>
            <li>
              <a href="https://x.com/varemoney" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={twitterIcon}
                  onMouseEnter={() => setTwitterIcon(faTwitter)}
                  onMouseLeave={() => setTwitterIcon(faXTwitter)}
                />
              </a>
            </li>
            <li>
              <a href="https://t.me/varemoney" target="_blank" rel="noopener noreferrer" className="telegram-icon">
                <TelegramIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Socials;
