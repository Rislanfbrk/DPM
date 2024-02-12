import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import GroupIcon from "../components/GroupIcon";
import "./Frame5.css";

const Frame5 = () => {
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

  const onVuesaxbulkarrowSquareLeftIconClick = useCallback(() => {
    navigate("/listing-details");
  }, [navigate]);

  return (
    <div className="map-view-parent">
      <main className="map-view">
        <section className="screenshot-2023-06-04-085308-1" />
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
        <img className="map-view-child" alt="" src="/group-4@2x.png" />
        <div className="instance-parent3">
          <GroupIcon adSizeCode="/group-1@2x.png" propTop="0px" />
          <h2 className="san-vicente-central">San Vicente Central (Pob...</h2>
        </div>
        <img
          className="vuesaxbulkarrow-square-left-icon4"
          alt=""
          src="/vuesaxbulkarrowsquareleft@2x.png"
          onClick={onVuesaxbulkarrowSquareLeftIconClick}
        />
      </main>
    </div>
  );
};

export default Frame5;
