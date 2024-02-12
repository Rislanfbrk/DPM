import { useMemo } from "react";
import "./Property1Variant.css";

const Property1Variant = ({
  notifications,
  property1Variant2Height,
  property1Variant2Position,
  frameDivBorder,
  notificationsDisplay,
  notificationsMargin,
  notificationsFontWeight,
}) => {
  const property1Variant2Style = useMemo(() => {
    return {
      height: property1Variant2Height,
      position: property1Variant2Position,
    };
  }, [property1Variant2Height, property1Variant2Position]);

  const frameDivStyle = useMemo(() => {
    return {
      border: frameDivBorder,
    };
  }, [frameDivBorder]);

  const notificationsStyle = useMemo(() => {
    return {
      display: notificationsDisplay,
      margin: notificationsMargin,
      fontWeight: notificationsFontWeight,
    };
  }, [notificationsDisplay, notificationsMargin, notificationsFontWeight]);

  return (
    <div className="property-1variant2" style={property1Variant2Style}>
      <div className="notifications-wrapper" style={frameDivStyle}>
        <div className="notifications" style={notificationsStyle}>
          {notifications}
        </div>
      </div>
    </div>
  );
};

export default Property1Variant;
