import Link from "next/link";
import Image from "next/image";
import React from "react";

const TierSponsor = ({ sponsors }) => {
  return (
    <div className="tier-sponsors">
      {sponsors.map((sponsor, i) => (
        <Link
          key={i}
          href={sponsor.link}
          className="sponsor-button"
          title={sponsor.name}
        >
          <Image
            src={sponsor.logo}
            alt={sponsor.name}
            className="sponsor-logo"
            placeholder="blur"
            fill
            sizes="100%"
            style={sponsor.style}
          />
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
          <h3>{tier.tier}</h3>
          <hr />
          <TierSponsor sponsors={tier.sponsors} />
        </div>
      ))}
    </div>
  );
};

export default SponsorList;
