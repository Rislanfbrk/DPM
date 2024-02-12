import { useState, useCallback } from "react";
import Filter from "../components/Filter";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import GroupIcon from "../components/GroupIcon";
import FrameComponent2 from "../components/FrameComponent2";
import Card from "../components/Card";
import "./Frame8.css";

const Frame8 = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const navigate = useNavigate();

  const onNavItemContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onNavItemContainer1Click = useCallback(() => {
    navigate("/map");
  }, [navigate]);

  const onNavItemContainer2Click = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onNavItemContainer3Click = useCallback(() => {
    navigate("/notifications");
  }, [navigate]);

  const onNavItemContainer4Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const openFilter = useCallback(() => {
    setFilterOpen(true);
  }, []);

  const closeFilter = useCallback(() => {
    setFilterOpen(false);
  }, []);

  return (
    <>
      <div className="search-text-filter-parent">
        <main className="search-text-filter">
          <section className="search-text-filter-child" />
          <Nav
            vuesaxoutlinehome2="/vuesaxoutlinehome2@2x.png"
            rectangle1="/rectangle-1@2x.png"
            vuesaxoutlinemap="/vuesaxoutlinemap@2x.png"
            rectangle11="/rectangle-1@2x.png"
            vuesaxoutlinesearchNormal="/vuesaxbulksearchnormal@2x.png"
            rectangle12="/rectangle-1.svg"
            vuesaxoutlinenotification="/vuesaxoutlinenotificationstatus.svg"
            vuesaxoutlineframe="/vuesaxoutlineframe.svg"
            navPosition="absolute"
            navBottom="0px"
            navLeft="calc(50% - 180px)"
            navItemOverflow="hidden"
            homeColor="#292d32"
            homeColor1="#292d32"
            homeColor2="#007bff"
            homeColor3="#292d32"
            homeColor4="#292d32"
            onNavItemContainerClick={onNavItemContainerClick}
            onNavItemContainer1Click={onNavItemContainer1Click}
            onNavItemContainer2Click={onNavItemContainer2Click}
            onNavItemContainer3Click={onNavItemContainer3Click}
            onNavItemContainer4Click={onNavItemContainer4Click}
          />
          <GroupIcon adSizeCode="/group-1@2x.png" propTop="73px" />
          <FrameComponent2 />
          <img
            className="vuesaxoutlinefilter-search-icon1"
            alt=""
            src="/vuesaxoutlinefiltersearch@2x.png"
            onClick={openFilter}
          />
          <h1 className="search">Search</h1>
          <Card
            propertyTitle="EG Rusiana"
            monthlyRent="PHP 2500/month"
            propertyImageId="/image-5@2x.png"
            propTop="335px"
            propLeft="calc(50% - 160px)"
          />
        </main>
      </div>
      {isFilterOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFilter}
        >
          <Filter onClose={closeFilter} />
        </PortalPopup>
      )}
    </>
  );
};

export default Frame8;
