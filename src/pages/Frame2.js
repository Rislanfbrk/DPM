import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import GroupIcon from "../components/GroupIcon";
import CardItem from "../components/CardItem";
import "./Frame2.css";

const Frame2 = () => {
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

  return (
    <div className="scan-parent">
      <main className="scan">
        <section className="scan-child" />
        <Nav
          vuesaxoutlinehome2="/vuesaxoutlinehome2@2x.png"
          rectangle1="/rectangle-1@2x.png"
          vuesaxoutlinemap="/vuesaxbulkmap@2x.png"
          rectangle11="/rectangle-1@2x.png"
          vuesaxoutlinesearchNormal="/vuesaxoutlinesearchnormal.svg"
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
          onNavItemContainer1Click={onNavItemContainer1Click}
          onNavItemContainer2Click={onNavItemContainer2Click}
          onNavItemContainer3Click={onNavItemContainer3Click}
          onNavItemContainer4Click={onNavItemContainer4Click}
        />
        <GroupIcon adSizeCode="/group-1.svg" propTop="31px" />
        <div className="heres-what-weve">Here’s what we’ve found.</div>
        <CardItem
          bG="/bg@2x.png"
          title="Olympia"
          price="PHP 3000.00/month"
          name1="Juan Dela Cruz"
          avatar="/avatar@2x.png"
          rate="4.3"
          text="500m"
          showKmsAway
          cardItemPosition="absolute"
          cardItemTop="167px"
          cardItemLeft="calc(50% - 160px)"
          titleMargin="unset"
          kmsAwayLeft="81.88%"
        />
        <CardItem
          bG="/bg@2x.png"
          title="RGV Boarding"
          price="PHP 2500.00/month"
          name1="John Doe"
          avatar="/avatar@2x.png"
          rate="2.5"
          text="800m"
          showKmsAway
          cardItemPosition="absolute"
          cardItemTop="421px"
          cardItemLeft="20px"
          titleMargin="0"
          kmsAwayLeft="81.88%"
        />
      </main>
    </div>
  );
};

export default Frame2;
