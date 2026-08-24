import dynamic from "next/dynamic";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import useInView from "@/hooks/useInView";
import { assetUrl, aircraftSlug } from "@/lib/aircrafts";

const AircraftViewer = dynamic(() => import("./AircraftViewer"), { ssr: false });

const markdownComponents = {
  table: ({ node, ...props }) => (
    <div className="aircraft-table-wrapper">
      <table {...props} />
    </div>
  ),
};

const AircraftRow = ({ aircraft, flip }) => {
  const [ref, inView] = useInView();

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
    </article>
  );
};

export default AircraftRow;
