import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import FrameComponent4 from "../components/FrameComponent4";
import NotifItem from "../components/NotifItem";
import "./Frame14.css";

const Frame14 = () => {
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

  const onNavItemContainer4Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className="notifications-parent">
      <main className="notifications2">
        <section className="notifications-child" />
        <Nav
          vuesaxoutlinehome2="/vuesaxoutlinehome2@2x.png"
          rectangle1="/rectangle-1@2x.png"
          vuesaxoutlinemap="/vuesaxoutlinemap@2x.png"
          rectangle11="/rectangle-1@2x.png"
          vuesaxoutlinesearchNormal="/vuesaxoutlinesearchnormal@2x.png"
          vuesaxoutlinenotification="/vuesaxbulknotificationstatus.svg"
          rectangle13="/rectangle-1.svg"
          vuesaxoutlineframe="/vuesaxoutlineframe.svg"
          navPosition="absolute"
          navBottom="0px"
          navLeft="calc(50% - 180px)"
          navItemOverflow="hidden"
          homeColor="#292d32"
          homeColor1="#292d32"
          homeColor2="#292d32"
          homeColor3="#007bff"
          homeColor4="#292d32"
          onNavItemContainerClick={onNavItemContainerClick}
          onNavItemContainer1Click={onNavItemContainer1Click}
          onNavItemContainer2Click={onNavItemContainer2Click}
          onNavItemContainer4Click={onNavItemContainer4Click}
        />
        <FrameComponent4 />
        <section className="notif-item-parent">
          <NotifItem
            vuesaxoutlinenotification="/vuesaxoutlinenotification@2x.png"
            text="32 new listings near your location"
            text2="20 minutes ago"
            notif
            showVuesaxOutlineNotification
            groupDivHeight="60px"
            timeTop="39px"
          />
          <NotifItem
            vuesaxoutlinenotification="/vuesaxoutlinenotification@2x.png"
            text="You request has been processed"
            text2="20 minutes ago"
            notif
            showVuesaxOutlineNotification
            groupDivHeight="60px"
            timeTop="39px"
          />
          <NotifItem
            vuesaxoutlinenotification="/vuesaxoutlinearchiveminus.svg"
            text="You have saved 2 items"
            text2="Yesterday"
            notif
            showVuesaxOutlineNotification
            groupDivHeight="51px"
            timeTop="30px"
          />
          <NotifItem
            vuesaxoutlinenotification="/vuesaxoutlinewalletcheck.svg"
            text="New deals available"
            text2="Yesterday"
            notif
            showVuesaxOutlineNotification
            groupDivHeight="51px"
            timeTop="30px"
          />
        </section>
      </main>
    </div>
  );
};

export default Frame14;
