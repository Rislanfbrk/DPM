import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Frame17 from "../components/Frame17";
import Carousel from "../components/Carousel";
import "./Frame16.css";

const Frame16 = () => {
  const navigate = useNavigate();

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

  return (
    <div className="home-parent">
      <main className="home2">
        <h2 className="near-you">Near you</h2>
        <div className="search-group">
          <div className="your-location">Search</div>
          <img
            className="vuesaxoutlinesearch-normal-icon5"
            alt=""
            src="/vuesaxoutlinesearchnormal@2x.png"
          />
        </div>
        <Nav
          vuesaxoutlinehome2="/vuesaxbulkhome2@2x.png"
          rectangle1="/rectangle-1@2x.png"
          vuesaxoutlinemap="/vuesaxoutlinemap@2x.png"
          rectangle11="/rectangle-1@2x.png"
          vuesaxoutlinesearchNormal="/vuesaxoutlinesearchnormal@2x.png"
          vuesaxoutlinenotification="/vuesaxoutlinenotificationstatus.svg"
          vuesaxoutlineframe="/vuesaxoutlineframe.svg"
          navPosition="absolute"
          navBottom="0px"
          navLeft="calc(50% - 180px)"
          navItemOverflow="unset"
          homeColor="#007bff"
          homeColor1="#292d32"
          homeColor2="#292d32"
          homeColor3="#292d32"
          homeColor4="#292d32"
          onNavItemContainer1Click={onNavItemContainer1Click}
          onNavItemContainer2Click={onNavItemContainer2Click}
          onNavItemContainer3Click={onNavItemContainer3Click}
          onNavItemContainer4Click={onNavItemContainer4Click}
        />
        <div className="frame">
          <div className="your-location">Your location</div>
          <div className="maharatu-pekanbaru-parent">
            <div className="maharatu-pekanbaru">Maharatu, Pekanbaru</div>
            <img
              className="vuesaxoutlinearrow-swap-hori-icon1"
              alt=""
              src="/vuesaxoutlinearrowswaphorizontal@2x.png"
            />
          </div>
        </div>
        <Frame17 />
        <Carousel />
      </main>
    </div>
  );
};

export default Frame16;
