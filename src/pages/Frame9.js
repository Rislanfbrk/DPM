import { useState, useCallback } from "react";
import Filter from "../components/Filter";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Card1 from "../components/Card1";
import GroupIcon from "../components/GroupIcon";
import Nav from "../components/Nav";
import "./Frame9.css";

const Frame9 = () => {
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
      <div className="search-text-result-parent">
        <main className="search-text-result">
          <section className="search-text-result-child" />
          <Card
            propertyTitle="Calapan Dormitory"
            monthlyRent="PHP 3500/month"
            propertyImageId="/image-5@2x.png"
            propTop="193px"
            propLeft="21px"
          />
          <Card1 />
          <GroupIcon adSizeCode="/group-1@2x.png" propTop="73px" />
          <h3 className="calapan">Calapan</h3>
          <h3 className="showing-3-results-container">
            <span className="showing">{`Showing `}</span>
            <b>{`3 `}</b>
            <span className="showing">results for “Calapan”</span>
          </h3>
          <img
            className="vuesaxoutlinefilter-search-icon2"
            alt=""
            src="/vuesaxoutlinefiltersearch@2x.png"
            onClick={openFilter}
          />
          <h3 className="search1">Search</h3>
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

export default Frame9;
