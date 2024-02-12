import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Default1 from "./Property1Default1";
import Property1Variant from "./Property1Variant";
import "./FrameComponent3.css";

const FrameComponent3 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/notifications");
  }, [navigate]);

  return (
    <div className="instance-parent4">
      <Property1Default1
        notifications="Notification"
        property1DefaultPosition="relative"
        notificationsLeft="calc(50% - 51.5px)"
        notificationsMargin="0"
        notificationsFontWeight="400"
        onFrameContainer1Click={onFrameContainerClick}
      />
      <Property1Variant
        notifications="Message"
        property1Variant2Height="53px"
        property1Variant2Position="relative"
        frameDivBorder="unset"
        notificationsDisplay="inline-block"
        notificationsMargin="0"
        notificationsFontWeight="400"
      />
    </div>
  );
};

export default FrameComponent3;
