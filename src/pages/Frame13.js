import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import FrameComponent3 from "../components/FrameComponent3";
import MessageItem from "../components/MessageItem";
import "./Frame13.css";

const Frame13 = () => {
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
    <div className="messages-parent">
      <main className="messages">
        <section className="messages-child" />
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
        <FrameComponent3 />
        <MessageItem
          vuesaxbulkandroid="/vuesaxbulkandroid@2x.png"
          cHATBOT="John Doe"
          messageHere="I am very sorry, but the room has already been taken."
          time="12 mins ago"
          messageItemPosition="absolute"
          messageItemTop="101px"
          messageItemLeft="calc(50% - 160px)"
          cHATBOTMargin="0"
          cHATBOTFontWeight="700"
          messageHereTop="17px"
          messageHereMargin="0"
          messageHereFontWeight="400"
        />
      </main>
    </div>
  );
};

export default Frame13;
