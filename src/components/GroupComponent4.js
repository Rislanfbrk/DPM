import { useMemo } from "react";
import "./GroupComponent4.css";

const GroupComponent4 = ({
  propertyDimensions,
  propertyDescription = "Condorm",
  monthlyRentAmount = "PHP 2300.00/month",
  showRectangle4388 = true,
  propTop,
  propBorder,
  propPadding,
  propBackgroundColor,
  propDisplay,
  propDisplay1,
}) => {
  const groupDiv2Style = useMemo(() => {
    return {
      top: propTop,
      border: propBorder,
      padding: propPadding,
      backgroundColor: propBackgroundColor,
    };
  }, [propTop, propBorder, propPadding, propBackgroundColor]);

  const title1Style = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const priceStyle = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  return (
    <div className="rectangle-parent43" style={groupDiv2Style}>
      <div className="instance-child10" />
      {showRectangle4388 && (
        <img className="rectangle-icon" alt="" src={propertyDimensions} />
      )}
      <div className="title9" style={title1Style}>
        {propertyDescription}
      </div>
      <div className="price8" style={priceStyle}>
        {monthlyRentAmount}
      </div>
    </div>
  );
};

export default GroupComponent4;
