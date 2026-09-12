import dynamic from "next/dynamic";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import ImageCarousel from "./ImageCarousel";

import useBetterMediaQuery from "@/hooks/useBetterMediaQuery";
import useInView from "@/hooks/useInView";
import { assetUrl, aircraftSlug } from "@/lib/aircrafts";

const AircraftViewer = dynamic(() => import("./AircraftViewer"), { ssr: false });

// Every slide crops to this box, so a row of mixed camera ratios still reads
// as one strip.
const SLIDE = { width: 380, height: 260, gap: 24 };
const SLIDE_MOBILE = { width: 260, height: 180, gap: 16 };

const markdownComponents = {
  table: ({ node, ...props }) => (
    <div className="aircraft-table-wrapper">
      <table {...props} />
    </div>
  ),
};

const AircraftRow = ({ aircraft, flip }) => {
  const [ref, inView] = useInView();
  // Null until the hook measures on the client, which lands on the desktop
  // slide — the same default the home page carousel takes.
  const isMobile = useBetterMediaQuery("(max-width: 800px)");

  return (
    <article
      ref={ref}
      id={aircraftSlug(aircraft.name)}
      className={`aircraft-row${flip ? " flip" : ""}`}
    >
      <div className="aircraft-info">
        <h2 className="aircraft-name">{aircraft.name}</h2>

        {(aircraft.year || aircraft.competition) && (
          <ul className="aircraft-meta">
            {aircraft.year && <li>{aircraft.year}</li>}
            {aircraft.competition && <li>{aircraft.competition}</li>}
          </ul>
        )}

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={markdownComponents}
          className="react-markdown aircraft-description"
        >
          {aircraft.description || ""}
        </ReactMarkdown>

        {aircraft.contributors.length > 0 && (
          <div className="aircraft-contributors">
            <h3>Contributors</h3>
            <p>{aircraft.contributors.join(", ")}</p>
          </div>
        )}
      </div>

      <div className="aircraft-model">
        {inView && (aircraft.model || aircraft.image) && (
          <AircraftViewer
            url={assetUrl(aircraft.model)}
            image={assetUrl(aircraft.image)}
            yaw={aircraft.yaw}
            name={aircraft.name}
          />
        )}
      </div>

      {aircraft.gallery.length > 0 && (
        <ImageCarousel
          className="aircraft-gallery"
          images={aircraft.gallery}
          alt={`${aircraft.name} photo`}
          arrows
          loop
          {...(isMobile ? SLIDE_MOBILE : SLIDE)}
        />
      )}
    </article>
  );
};

export default AircraftRow;
