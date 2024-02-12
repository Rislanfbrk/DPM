import { useMemo } from "react";
import "./Property1Default1.css";

const Property1Default1 = ({
  notifications,
  property1DefaultPosition,
  notificationsLeft,
  notificationsMargin,
  notificationsFontWeight,
  onFrameContainer1Click,
}) => {
  const property1Default1Style = useMemo(() => {
    return {
      position: property1DefaultPosition,
    };
  }, [property1DefaultPosition]);

  const notifications1Style = useMemo(() => {
    return {
      left: notificationsLeft,
      margin: notificationsMargin,
      fontWeight: notificationsFontWeight,
    };
  }, [notificationsLeft, notificationsMargin, notificationsFontWeight]);

  return (
    <div
      className="property-1default1"
      style={property1Default1Style}
      onClick={onFrameContainer1Click}
    >
      <div className="notifications1" style={notifications1Style}>
        {notifications}
      </div>
    </div>
  );
};

export default Property1Default1;
