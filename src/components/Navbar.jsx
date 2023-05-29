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
  return (
    <nav className="navbar">
      <Link className="logo-link" href="/">
        <WatArrow height="100%" />
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
      <MenuButton links={links} />
    </nav>
  );
};

export default Navbar;
