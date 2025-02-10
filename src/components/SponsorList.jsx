import Link from "next/link";
import Image from "next/image";
import React from "react";

const TierSponsor = ({ sponsors }) => {
  const DIRECTUS_CDN_URL = process.env.NEXT_PUBLIC_DIRECTUS_CDN_URL;

  return (
    <div className="tier-sponsors">
      {sponsors.map((sponsor, i) => (
        <Link
          key={i}
          href={sponsor.link}
          className="sponsor-button"
          title={sponsor.name}
        >
          <div className="image-container">
            <Image
              src={`${DIRECTUS_CDN_URL}/assets/${sponsor.logo}`}
              alt={sponsor.name}
              className="sponsor-logo"
              fill
              sizes="100%"
              style={sponsor.style}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

const SponsorList = ({ sponsors }) => {
  return (
    <div className="sponsor-list-root">
      {sponsors.map((tier, i) => (
        <div key={i} className="tier-container">
          <h3>{tier.name}</h3>
          <hr />
          <TierSponsor sponsors={tier.sponsors} />
        </div>
      ))}
    </div>
  );
};

export default SponsorList;
