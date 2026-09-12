import FadeIn from "react-fade-in";

import AircraftRow from "./AircraftRow";

const AircraftList = ({ aircrafts }) => {
  if (aircrafts.length === 0) {
    return (
      <FadeIn delay={150} transitionDuration={750}>
        <div className="no-aircrafts-container">
          <p className="no-aircrafts">
            It looks like we don′t have any aircraft to show at this moment.
            Please come back another time!
          </p>
        </div>
      </FadeIn>
    );
  }

  return (
    <div className="aircraft-list-root">
      <h1 className="aircraft-list-title">Aircraft</h1>

      {aircrafts.map((aircraft, i) => (
        // Odd rows put the model on the left. Reordering in Directus re-alternates the whole list on its own.
        <AircraftRow key={aircraft.id} aircraft={aircraft} flip={i % 2 === 1} />
      ))}
    </div>
  );
};

export default AircraftList;
