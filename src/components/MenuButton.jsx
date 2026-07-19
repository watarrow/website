import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const menuItemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.075 + i * 0.0875 },
  }),
};

const MenuButton = ({
  links,
  menuOpen,
  setMenuOpen,
  showBackground,
  setShowBackground,
}) => {
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
      <div
        className="menu"
        data-menu-open={menuOpen}
        onAnimationEnd={() => setShowBackground(menuOpen)}
      >
        <ul className="menu-links-list">
          <AnimatePresence>
            {links.map((link, i) => (
              <motion.li
                className="menu-links-list-item"
                id={link.special ? "special" : undefined}
                key={i}
                custom={i}
                initial="hidden"
                animate={menuOpen ? "visible" : "hidden"}
                variants={menuItemVariants}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <Link className="menu-link" href={link.href}>
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
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
