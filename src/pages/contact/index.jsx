import FadeIn from "react-fade-in";
import Link from "next/link";
import Head from "next/head";

import Arrow from "@/assets/logo-transparent-svg.svg";

import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

const Contact = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>WatArrow | Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="contact-root">
        <div className="contact-container">
          <FadeIn delay={100} transitionDuration={700} className="left">
            <div className="header">
              <h1>CONTACT US</h1>
              <p>
                If you′re interested in working with us, sponsoring us, or want
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
            <div className="social">
              <h2>Social Media</h2>
              <p>
                <Link
                  className="link"
                  href="https://ca.linkedin.com/company/watarrow"
                >
                  LinkedIn
                </Link>
              </p>
              <p>
                <Link
                  className="link"
                  href="https://www.instagram.com/uwatarrow"
                >
                  Instagram
                </Link>
              </p>
            </div>
          </FadeIn>
          <div className="right">
            <FadeIn delay={600} transitionDuration={700} className="logo">
              <Arrow />
            </FadeIn>
          </div>
        </div>
      </main>
    </>
  );
};
export default Contact;

export const getServerSideProps = async () => {
  const contacts = await directus.request(
    readItems("contacts", {
      sort: ["sort"],
    })
  );

  return {
    props: {
      contacts,
    },
  };
};
