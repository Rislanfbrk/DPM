import { useMemo } from "react";
import Property1active from "./Property1active";
import "./Nav.css";

const Nav = ({
  vuesaxoutlinehome2,
  rectangle1,
  vuesaxoutlinemap,
  rectangle11,
  vuesaxoutlinesearchNormal,
  rectangle12,
  vuesaxoutlinenotification,
  rectangle13,
  vuesaxoutlineframe,
  rectangle14,
  navPosition,
  navBottom,
  navLeft,
  navItemOverflow,
  homeColor,
  homeColor1,
  homeColor2,
  homeColor3,
  homeColor4,
  onNavItemContainerClick,
  onNavItemContainer1Click,
  onNavItemContainer2Click,
  onNavItemContainer3Click,
  onNavItemContainer4Click,
}) => {
  const navStyle = useMemo(() => {
    return {
      position: navPosition,
      bottom: navBottom,
      left: navLeft,
    };
  }, [navPosition, navBottom, navLeft]);

  const property1activeStyle = useMemo(() => {
    return {
      overflow: navItemOverflow,
    };
  }, [navItemOverflow]);

  const homeStyle = useMemo(() => {
    return {
      color: homeColor,
    };
  }, [homeColor]);

  const homeStyle1 = useMemo(() => {
    return {
      color: homeColor1,
    };
  }, [homeColor1]);

  const homeStyle2 = useMemo(() => {
    return {
      color: homeColor2,
    };
  }, [homeColor2]);

  const homeStyle3 = useMemo(() => {
    return {
      color: homeColor3,
    };
  }, [homeColor3]);

  const homeStyle4 = useMemo(() => {
    return {
      color: homeColor4,
    };
  }, [homeColor4]);

  return (
    <div className="nav" style={navStyle}>
      <Property1active
        vuesaxbulkhome2="/vuesaxoutlinehome2.svg"
        text="Home"
        property1activeOverflow="hidden"
        homeColor="#292d32"
        onNavItemContainerClick={onNavItemContainerClick}
      />
      <Property1active
        vuesaxbulkhome2="/vuesaxoutlinemap.svg"
        text="Map"
        property1activeOverflow="unset"
        homeColor="#292d32"
        onNavItemContainerClick={onNavItemContainer1Click}
      />
      <Property1active
        vuesaxbulkhome2="/vuesaxoutlinesearchnormal.svg"
        text="Search"
        property1activeOverflow="unset"
        homeColor="#292d32"
        onNavItemContainerClick={onNavItemContainer2Click}
      />
      <Property1active
        vuesaxbulkhome2="/vuesaxoutlinenotificationstatus.svg"
        text="Activity"
        property1activeOverflow="unset"
        homeColor="#292d32"
        onNavItemContainerClick={onNavItemContainer3Click}
      />
      <Property1active
        vuesaxbulkhome2="/vuesaxoutlineframe.svg"
        text="Profile"
        property1activeOverflow="unset"
        homeColor="#292d32"
        onNavItemContainerClick={onNavItemContainer4Click}
      />
    </div>
  );
};

export default Nav;
