import React from "react";
import Image from "next/image";

const Vision: React.FC = () => {
  return (
    <section
      id="vision"
      className="min-h-screen flex items-center justify-center bg-black text-yellow-400"
    >
      <div className="max-w-4xl mx-auto p-8">
        <div className="w-full mb-8">
          <Image
            width={1210}
            height={403}
            src="/images/content/vision-with-text.png"
            alt="Hero Image"
            placeholder="blur"
            blurDataURL="/images/content/blurred_vision-with-text.png"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </div>
        <div className="vision-content">
          <p>
            We&apos;re transforming crypto from a landscape of scams and fraud to
            one of transparency, community, and openness.
            <br />
            <br />
            Drawing inspiration from Alan Moore&apos;s iconic graphic novel, we
            are crafting original content that stands on its own &mdash;
            completely independent of movements like Occupy and Anonymous.
            <br />
            <br />
            Join us in redefining the crypto scene!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
