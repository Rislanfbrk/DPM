import { useMemo } from "react";
import "./Property1active.css";

const Property1active = ({
  vuesaxbulkhome2,
  text = "Home",
  rectangle1,
  property1activeOverflow,
  homeColor,
  onNavItemContainerClick,
}) => {
  const property1activeStyle = useMemo(() => {
    return {
      overflow: property1activeOverflow,
    };
  }, [property1activeOverflow]);

  const homeStyle = useMemo(() => {
    return {
      color: homeColor,
    };
  }, [homeColor]);

  return (
    <div
      className="property-1active"
      style={property1activeStyle}
      onClick={onNavItemContainerClick}
    >
      <img className="vuesaxbulkhome-2-icon1" alt="" src={vuesaxbulkhome2} />
      <div className="home" style={homeStyle}>
        {text}
      </div>
      <img className="property-1active-child" alt="" src={rectangle1} />
    </div>
  );
};

export default Property1active;
