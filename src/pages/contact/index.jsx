import FadeIn from "react-fade-in";
import Link from "next/link";

import Arrow from "@/assets/logo-transparent-svg.svg";

import contacts from "@/data/contact";

const Contact = () => {
  return (
    <main className="contact-root">
      <div className="contact-container">
        <div className="left">
          <div className="header">
            <h1>CONTACT US</h1>
            <p>
              If you are interested in working with us, sponsoring us, or want
              to learn more, feel free to reach out to us!
            </p>
          </div>
          {contacts.map((contact, i) => (
            <div className="contact-card" key={i}>
              <h2>{contact.purpose}</h2>
              <p>{contact.name}</p>
              <Link className="email" href={`mailto:${contact.email}`}>
                {contact.email}
              </Link>
            </div>
          ))}
        </div>
        <div className="right">
          <div className="logo">
            <Arrow />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Contact;
