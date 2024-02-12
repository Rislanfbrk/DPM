import "./Frame3.css";

const Frame3 = () => {
  return (
    <div className="scan-loading-parent">
      <main className="scan-loading">
        <section className="image-9" />
        <div className="please-wait-scanning-container">
          <p className="please-wait">Please wait...</p>
          <p className="please-wait">&nbsp;</p>
          <p className="scanning-the-vicinity">Scanning the vicinity</p>
        </div>
      </main>
    </div>
  );
};

export default Frame3;
