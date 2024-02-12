import { useMemo } from "react";
import "./GroupIcon.css";

const GroupIcon = ({ adSizeCode, propTop }) => {
  const groupIconStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <img className="scan-item" alt="" src={adSizeCode} style={groupIconStyle} />
  );
};

export default GroupIcon;
