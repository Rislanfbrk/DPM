import { useMemo } from "react";
import "./NotifItem.css";

const NotifItem = ({
  vuesaxoutlinenotification,
  text = "Notif text",
  text2 = "Time",
  notif = true,
  showVuesaxOutlineNotification = true,
  groupDivHeight,
  timeTop,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      height: groupDivHeight,
    };
  }, [groupDivHeight]);

  const timeStyle = useMemo(() => {
    return {
      top: timeTop,
    };
  }, [timeTop]);

  return (
    <div className="notif-item">
      {showVuesaxOutlineNotification && (
        <img
          className="vuesaxoutlinenotification-icon1"
          alt=""
          src={vuesaxoutlinenotification}
        />
      )}
      <div className="notif-text-parent" style={groupDiv1Style}>
        {notif && <div className="notif-text">{text}</div>}
        <div className="time1" style={timeStyle}>
          {text2}
        </div>
      </div>
    </div>
  );
};

export default NotifItem;
