import { useState, useEffect } from "react";
import Link from "next/link";

import Arrow from "@/assets/logo-transparent-svg.svg";
import MenuButton from "./MenuButton";

const links = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Team",
    href: "/team",
  },
  {
    name: "Timeline",
    href: "/timeline",
  },
  {
    name: "Sponsors",
    href: "/sponsors",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
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
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="logo-link" href="/">
          <Arrow height="100%" />
        </Link>
        {/* collapsed menu for mobile */}
        <ul className="links-list">
          {links.map((link, i) => (
            <li className="links-list-item" key={i}>
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
