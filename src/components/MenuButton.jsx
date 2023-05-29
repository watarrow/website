import { useState } from "react";
import Link from "next/link";
import FadeIn from "react-fade-in/lib/FadeIn";

const MenuButton = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="menu-button">
        <div
          id="hamburger"
          className={menuOpen ? "open" : ""}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="menu" data-menu-open={menuOpen}>
        <ul className="menu-links-list">
          <FadeIn visible={menuOpen} transitionDuration={500} delay={100}>
            {links.map((link, i) => (
              <li className="menu-links-list-item" key={i}>
                <Link className="menu-link" href={link.href}>
                  {link.name}
                </Link>
              </li>
            ))}
          </FadeIn>
        </ul>
      </div>
    </>
  );
};
export default MenuButton;
