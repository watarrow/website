import Link from "next/link";
import FadeIn from "react-fade-in";
import Head from "next/head";

import roles from "@/data/roles";

const Join = () => {
  return (
    <>
      <Head>
        <title>WatArrow | Join Us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="join-root">
        <FadeIn delay={150} transitionDuration={750} className="join-content">
          <div className="header">
            <h1>JOIN US</h1>
            <p>
              We′re thrilled that you′re considering joining WatArrow! As we
              grow our team, we can use all the help we can get. We have a lot
              going on from sponsorships, software, and most importantly
              engineering! Regardless of your background, there will be a place
              for you here and we can′t wait for you to be a part of the team!
            </p>
          </div>
          <div className="open-roles-container">
            <h2>OPEN ROLES</h2>
            <div className="open-roles-list-container">
              {roles.length > 0 ? (
                <ul className="open-roles-list">
                  {roles.map(
                    (role, i) =>
                      role.visible && (
                        <li className="open-roles-list-item" key={i}>
                          <p className="role-title">{role.title}</p>
                          <Link className="view-role" href={role.href}>
                            View Role
                          </Link>
                        </li>
                      )
                  )}
                </ul>
              ) : (
                <p className="no-roles">
                  It looks like we don′t have any open roles at the moment.
                  Please check again another time or apply through our General
                  Interest Form.
                </p>
              )}
            </div>
          </div>
          <div className="general-interest-form">
            <h2>GENERAL INTEREST FORM</h2>
            <p>
              If you don′t find any roles that fit your experience, feel free to
              apply through our general interest form!
            </p>
            <div className="basic-button">
              <Link href="https://forms.gle/dfdu8PrBZMSMMvWBA">Apply</Link>
            </div>
          </div>
        </FadeIn>
      </main>
    </>
  );
};
export default Join;
