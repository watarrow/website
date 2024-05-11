// PLATINUM
import weef from "@/assets/sponsors/weef.webp";
import waterlooEngineering from "@/assets/sponsors/waterloo-engineering.jpeg";
import msam from "@/assets/sponsors/msam.jpeg";
import ssdc from "@/assets/sponsors/ssdc.jpg";
import engsoc from "@/assets/sponsors/engsoc.png";
import solidworks from "@/assets/sponsors/solidworks.png";
import ansys from "@/assets/sponsors/ansys.png";
import sff from "@/assets/sponsors/sff.jpeg";
import greatHobbies from "@/assets/sponsors/great-hobbies.png";
import compositesCanada from "@/assets/sponsors/composites-canada.png";
import rockWestComposites from "@/assets/sponsors/rock-west-composites.jpg";

const sponsors = [
  {
    tier: "Platinum",
    sponsors: [
      {
        name: "University of Waterloo - Faculty of Engineering",
        link: "https://uwaterloo.ca/future-students/engineering",
        logo: waterlooEngineering,
      },
      {
        name: "WEEF",
        link: "https://uwaterloo.ca/engineering-endowment-foundation/",
        logo: weef,
      },
    ],
  },
  {
    tier: "Gold",
    sponsors: [
      {
        name: "University of Waterloo - Sedra Student Design Centre",
        link: "https://uwaterloo.ca/sedra-student-design-centre/",
        logo: ssdc,
        style: { transform: "scale(1.125)" },
      },
      {
        name: "University of Waterloo - Engineering Society",
        link: "https://www.engsoc.uwaterloo.ca/",
        logo: engsoc,
      },
      {
        name: "Multi-Scale Additive Manufacturing Lab",
        link: "https://msam.uwaterloo.ca/",
        logo: msam,
      },
      {
        name: "SOLIDWORKS",
        link: "https://www.solidworks.com/",
        logo: solidworks,
      },
      {
        name: "ANSYS",
        link: "https://www.ansys.com/",
        logo: ansys,
      },
    ],
  },
  {
    tier: "Silver",
    sponsors: [
      {
        name: "University of Waterloo - Sanford Fleming Foundation",
        link: "https://uwaterloo.ca/sandford-fleming-foundation/",
        logo: sff,
      },
    ],
  },
  {
    tier: "Bronze",
    sponsors: [
      {
        name: "Composites Canada",
        link: "https://compositescanada.com/",
        logo: compositesCanada,
      },
      {
        name: "Rock West Composites",
        link: "https://www.rockwestcomposites.com/",
        logo: rockWestComposites,
      },
    ],
  },
  {
    tier: "Contributor",
    sponsors: [
      {
        name: "Great Hobbies",
        link: "https://www.greathobbies.com/",
        logo: greatHobbies,
      },
    ],
  },
];

export default sponsors;
