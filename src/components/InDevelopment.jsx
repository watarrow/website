import WatArrow from "@/assets/watarrow-word-logo.svg";

const InDevelopment = () => {
  return (
    <div className="in-development-root">
      <div className="content-container">
        <div className="logo-container">
          <WatArrow height="100%" />
        </div>
        <h1>This Page Is Currently Under Development</h1>
        <p>Please come back another time :)</p>
      </div>
    </div>
  );
};
export default InDevelopment;
