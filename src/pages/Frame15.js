import { useState, useCallback } from "react";
import FilterSearch from "../components/FilterSearch";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import "./Frame15.css";

const Frame15 = () => {
  const [isFilterSearchOpen, setFilterSearchOpen] = useState(false);
  const navigate = useNavigate();

  const onNavItemContainerClick = useCallback(() => {
    navigate("/home");
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

  const openFilterSearch = useCallback(() => {
    setFilterSearchOpen(true);
  }, []);

  const closeFilterSearch = useCallback(() => {
    setFilterSearchOpen(false);
  }, []);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/scan-loading");
  }, [navigate]);

  return (
    <>
      <div className="map-parent">
        <main className="map">
          <section className="image-111" />
          <Nav
            vuesaxoutlinehome2="/vuesaxoutlinehome2@2x.png"
            rectangle1="/rectangle-1@2x.png"
            vuesaxoutlinemap="/vuesaxbulkmap@2x.png"
            rectangle11="/rectangle-1@2x.png"
            vuesaxoutlinesearchNormal="/vuesaxoutlinesearchnormal@2x.png"
            vuesaxoutlinenotification="/vuesaxoutlinenotificationstatus.svg"
            vuesaxoutlineframe="/vuesaxoutlineframe.svg"
            navPosition="absolute"
            navBottom="0px"
            navLeft="calc(50% - 180px)"
            navItemOverflow="hidden"
            homeColor="#292d32"
            homeColor1="#007bff"
            homeColor2="#292d32"
            homeColor3="#292d32"
            homeColor4="#292d32"
            onNavItemContainerClick={onNavItemContainerClick}
            onNavItemContainer2Click={onNavItemContainer2Click}
            onNavItemContainer3Click={onNavItemContainer3Click}
            onNavItemContainer4Click={onNavItemContainer4Click}
          />
          <div className="rectangle-parent32">
            <div className="frame-child" />
            <img
              className="vuesaxoutlinesearch-normal-icon4"
              alt=""
              src="/vuesaxoutlinesearchnormal.svg"
            />
            <img
              className="vuesaxoutlinedocument-filter-icon1"
              alt=""
              src="/vuesaxoutlinedocumentfilter@2x.png"
              onClick={openFilterSearch}
            />
            <div className="search4">Search</div>
          </div>
          <section className="ellipse-parent">
            <div className="group-child29" />
            <div className="group-child30" />
          </section>
          <div className="rectangle-parent33" onClick={onGroupContainer1Click}>
            <div className="group-child31" />
            <h2 className="scan-area">Scan area</h2>
          </div>
        </main>
      </div>
      {isFilterSearchOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFilterSearch}
        >
          <FilterSearch onClose={closeFilterSearch} />
        </PortalPopup>
      )}
    </>
  );
};

export default Frame15;
