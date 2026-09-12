import FadeIn from "react-fade-in";

import AircraftRow from "./AircraftRow";

const AircraftList = ({ aircraft, aircrafts = aircraft }) => {
  const list = aircraft || aircrafts || [];

  if (list.length === 0) {
    return (
      <FadeIn delay={150} transitionDuration={750}>
        <div className="no-aircraft-container">
          <p className="no-aircraft">
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

      {list.map((item, i) => (
        // Odd rows put the model on the left. Reordering in Directus re-alternates the whole list on its own.
        <AircraftRow key={item.id} aircraft={item} flip={i % 2 === 1} />
      ))}
    </div>
  );
};

export default AircraftList;
