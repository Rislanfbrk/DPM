import { useState, useCallback } from "react";
import Filter from "../components/Filter";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Card3 from "../components/Card3";
import GroupIcon from "../components/GroupIcon";
import Card2 from "../components/Card2";
import Nav from "../components/Nav";
import "./Frame10.css";

const Frame10 = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const navigate = useNavigate();

  const onNavItemContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onNavItemContainer1Click = useCallback(() => {
    navigate("/map");
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
      <div className="search-parent">
        <main className="search2">
          <section className="search-child" />
          <Card3
            imageDimensions="/avatar@2x.png"
            characterName="Gray Fullbuster"
            propertyName="Hope Apartment"
            rentalPrice="PHP 6500/month"
            imageDimensionsUrl="/image-5@2x.png"
            mediaBodyTop="546px"
          />
          <GroupIcon adSizeCode="/group-1.svg" propTop="73px" />
          <div className="calapan1">Calapan</div>
          <img
            className="vuesaxoutlinefilter-search-icon3"
            alt=""
            src="/vuesaxoutlinefiltersearch.svg"
            onClick={openFilter}
          />
          <h3 className="search3">Search</h3>
          <Card2 />
          <Card3
            imageDimensions="/avatar@2x.png"
            characterName="Erza Scarlet"
            propertyName="JCS Boarding House"
            rentalPrice="PHP 2500/month"
            imageDimensionsUrl="/image-5@2x.png"
            mediaBodyTop="941px"
          />
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
            onNavItemContainer3Click={onNavItemContainer3Click}
            onNavItemContainer4Click={onNavItemContainer4Click}
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

export default Frame10;
