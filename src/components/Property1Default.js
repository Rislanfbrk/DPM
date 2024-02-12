import { useMemo } from "react";
import "./Property1Default.css";

const Property1Default = ({
  inPerson,
  property1DefaultBorder,
  property1DefaultPadding,
  property1DefaultBackgroundColor,
  inPersonDisplay,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      border: property1DefaultBorder,
      padding: property1DefaultPadding,
      backgroundColor: property1DefaultBackgroundColor,
    };
  }, [
    property1DefaultBorder,
    property1DefaultPadding,
    property1DefaultBackgroundColor,
  ]);

  const inPersonStyle = useMemo(() => {
    return {
      display: inPersonDisplay,
    };
  }, [inPersonDisplay]);

  return (
    <div className="property-1default" style={property1DefaultStyle}>
      <div className="in-person-wrapper">
        <b className="in-person" style={inPersonStyle}>
          {inPerson}
        </b>
      </div>
    </div>
  );
};

export default Property1Default;
