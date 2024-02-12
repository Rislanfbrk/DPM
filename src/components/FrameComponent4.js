import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Variant from "./Property1Variant";
import Property1Default1 from "./Property1Default1";
import "./FrameComponent4.css";

const FrameComponent4 = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/messages");
  }, [navigate]);

  return (
    <div className="instance-parent5">
      <Property1Variant
        notifications="Notification"
        property1Variant2Height="53px"
        property1Variant2Position="relative"
        frameDivBorder="none"
        notificationsDisplay="inline-block"
        notificationsMargin="unset"
        notificationsFontWeight="unset"
      />
      <Property1Default1
        notifications="Message"
        property1DefaultPosition="relative"
        notificationsLeft="calc(50% - 40.5px)"
        notificationsMargin="unset"
        notificationsFontWeight="unset"
        onFrameContainer1Click={onFrameContainer1Click}
      />
    </div>
  );
};

export default FrameComponent4;
