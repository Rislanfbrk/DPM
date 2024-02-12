import { useMemo } from "react";
import "./Property1Default3.css";

const Property1Default3 = ({
  mdiuserCircleOutline,
  showMdiUserCircleOutline = true,
  nameFontFamily,
}) => {
  const nameStyle = useMemo(() => {
    return {
      fontFamily: nameFontFamily,
    };
  }, [nameFontFamily]);

  return (
    <div className="property-1default3">
      {showMdiUserCircleOutline && (
        <img
          className="mdiuser-circle-outline-icon"
          alt=""
          src={mdiuserCircleOutline}
        />
      )}
      <div className="name" style={nameStyle}>
        Name
      </div>
    </div>
  );
};

export default Property1Default3;
