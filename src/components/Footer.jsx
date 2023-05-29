import Link from "next/link";
import { useMediaQuery } from "@mui/material";

const links = [
  {
    name: "Hello",
    href: "Hello",
  },
  {
    name: "Hello",
    href: "Hello",
  },
  {
    name: "Hello",
    href: "Hello",
  },
  {
    name: "Hello",
    href: "Hello",
  },
];

const Footer = () => {
  const isMobile = useMediaQuery("(max-width: 800px)");
  const copyrightText = `WATARROW © ${new Date().getFullYear()}`;

  return (
    <footer className="footer">
      {isMobile && <p className="copyright mobile">{copyrightText}</p>}
      <ul className="links-list">
        {isMobile || <li className="copyright">{copyrightText}</li>}
        {links.map((link, i) => (
          <li className="links-list-item" key={i}>
            <Link className="link" href={link.href}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
