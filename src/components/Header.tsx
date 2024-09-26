import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-48px 0px 0px 0px", // Adjust this value to match the header height
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    const target = document.getElementById(section);
    if (target) {
      const headerHeight = 48; // Adjust this value to match the header height
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
    setActiveSection(section);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black py-4 z-50 w-full">
      <nav className="container mx-auto">
        <ul className="flex justify-center items-center space-x-6">
          {["vision", "tokenomics", /*"whitepaper",*/ "socials", "buy"].map(
            (section) => (
              <li key={section} className="inline-block">
                <a
                  href={`#${section}`}
                  onClick={(e) => handleLinkClick(e, section)}
                  className={`navbar-link text-lg uppercase ${activeSection === section ? "active" : ""
                    }`}
                >
                  {section.toUpperCase()}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
