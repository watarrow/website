import { useState, useEffect } from "react";
import Link from "next/link";

import Arrow from "@/assets/logo-transparent-svg.svg";
import MenuButton from "./MenuButton";

import links from "@/data/links";

const Navbar = () => {
  const [showNavbarBackground, setShowNavbarBackground] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    window.onscroll = () => scrollFunction();
  });

  let lastScrollTop = 0;
  const scrollFunction = () => {
    let scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollTop > 100) {
      setMenuOpen(false);
      setShowBackground(false);
    }

    if (scrollTop > window.innerHeight) {
      setShowNavbarBackground(true);
    } else if (scrollTop < window.innerHeight) {
      setShowNavbarBackground(false);
    }

    if (scrollTop > lastScrollTop) {
      // downscroll
      document.querySelector(".navbar").style.opacity = 0;
    } else if (scrollTop < lastScrollTop) {
      // upscroll
      document.querySelector(".navbar").style.opacity = 1;
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  };

  return (
    <nav
      className={`navbar ${showNavbarBackground ? "navbar-background" : ""}`}
    >
      <div className="navbar-container">
        <Link className="logo-link" href="/" onClick={() => setMenuOpen(false)}>
          <Arrow height="100%" />
        </Link>
        {/* collapsed menu for mobile */}
        <ul className="links-list">
          {links.map((link, i) => (
            <li
              className="links-list-item"
              id={link.special && "special"}
              key={i}
            >
              <Link className="link" href={link.href}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <MenuButton
          links={links}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          showBackground={showBackground}
          setShowBackground={setShowBackground}
        />
      </div>
    </nav>
  );
};

export default Navbar;
