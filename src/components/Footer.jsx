import Link from "next/link";
import useBetterMediaQuery from "@/hooks/useBetterMediaQuery";

const links = [
  {
    name: "Sponsor",
    href: "/sponsor",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Join Us",
    href: "/join",
  },
];

const Footer = () => {
  const isMobile = useBetterMediaQuery("(max-width: 800px)");
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
