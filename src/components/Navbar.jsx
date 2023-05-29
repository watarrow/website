import Link from "next/link";
import WatArrow from "@/assets/watarrow-word-logo.svg";
import { useMediaQuery } from "@mui/material";
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
  const isMobile = useMediaQuery("(max-width: 800px)");

  return (
    <nav className="navbar">
      <Link className="logo-link" href="/">
        <WatArrow height="100%" />
      </Link>
      {/* collapsed menu for mobile */}
      {!isMobile && (
        <ul className="links-list">
          {links.map((link, i) => (
            <li className="links-list-item" key={i}>
              <Link className="link" href={link.href}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {isMobile && <MenuButton links={links} className="menu-button" />}
    </nav>
  );
};

export default Navbar;
