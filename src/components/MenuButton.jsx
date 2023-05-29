import { useState } from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const MenuButton = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  return (
    <>
      <div
        className="menu-button"
        onClick={() => {
          setMenuOpen(!menuOpen);
          setShowBackground(true);
        }}
      >
        <div id="hamburger" className={menuOpen ? "open" : ""}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="menu" data-menu-open={menuOpen}>
        <ul className="menu-links-list">
          <Fade
            cascade
            damping={0.175}
            delay={75}
            duration={500}
            onVisibilityChange={() => setShowBackground(menuOpen)}
          >
            {links.map((link, i) => (
              <li className="menu-links-list-item" key={i}>
                <Link className="menu-link" href={link.href}>
                  {link.name}
                </Link>
              </li>
            ))}
          </Fade>
        </ul>
      </div>
      <div
        className="background"
        data-menu-open={menuOpen}
        data-background={showBackground}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
};
export default MenuButton;
