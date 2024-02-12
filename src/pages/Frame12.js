import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent3 from "../components/GroupComponent3";
import Nav from "../components/Nav";
import "./Frame12.css";

const Frame12 = () => {
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

  const onFrameContainerClick = useCallback(() => {
    // Please sync "Bookmarks" to the project
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    // Please sync "applications" to the project
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    // Please sync "Help" to the project
  }, []);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/settings-user");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/get-started");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/edit-profile");
  }, [navigate]);

  return (
    <div className="profile-parent">
      <main className="profile">
        <section className="profile-child" />
        <section className="profile-item" />
        <GroupComponent3 />
        <Nav
          vuesaxoutlinehome2="/vuesaxoutlinehome2@2x.png"
          rectangle1="/rectangle-1@2x.png"
          vuesaxoutlinemap="/vuesaxoutlinemap.svg"
          rectangle11="/rectangle-1@2x.png"
          vuesaxoutlinesearchNormal="/vuesaxoutlinesearchnormal.svg"
          vuesaxoutlinenotification="/vuesaxoutlinenotificationstatus.svg"
          vuesaxoutlineframe="/vuesaxbulkprofile.svg"
          rectangle14="/rectangle-1.svg"
          navPosition="absolute"
          navBottom="0px"
          navLeft="calc(50% - 180px)"
          navItemOverflow="hidden"
          homeColor="#292d32"
          homeColor1="#292d32"
          homeColor2="#292d32"
          homeColor3="#292d32"
          homeColor4="#007bff"
          onNavItemContainerClick={onNavItemContainerClick}
          onNavItemContainer1Click={onNavItemContainer1Click}
          onNavItemContainer2Click={onNavItemContainer2Click}
          onNavItemContainer3Click={onNavItemContainer3Click}
        />
        <section className="frame-parent">
          <div className="frame-wrapper" onClick={onFrameContainerClick}>
            <div className="vuesaxbulkbookmark-parent">
              <img
                className="vuesaxbulkbookmark-icon1"
                alt=""
                src="/vuesaxbulkbookmark@2x.png"
              />
              <div className="bookmarks">Bookmarks</div>
            </div>
          </div>
          <div className="frame-wrapper" onClick={onFrameContainer1Click}>
            <div className="vuesaxbulkbookmark-parent">
              <img
                className="vuesaxbulkbookmark-icon1"
                alt=""
                src="/vuesaxbulkdocument@2x.png"
              />
              <div className="bookmarks">Applications</div>
            </div>
          </div>
          <div className="frame-wrapper" onClick={onFrameContainer2Click}>
            <div className="vuesaxbulkbookmark-parent">
              <img
                className="vuesaxbulkbookmark-icon1"
                alt=""
                src="/vuesaxbulkmessagequestion@2x.png"
              />
              <div className="bookmarks">Help</div>
            </div>
          </div>
          <div className="frame-wrapper" onClick={onFrameContainer3Click}>
            <div className="vuesaxbulkbookmark-parent">
              <img
                className="vuesaxbulkbookmark-icon1"
                alt=""
                src="/vuesaxbulksetting2@2x.png"
              />
              <div className="bookmarks">Settings</div>
            </div>
          </div>
          <div className="frame-wrapper" onClick={onFrameContainer4Click}>
            <div className="vuesaxbulkbookmark-parent">
              <img
                className="vuesaxbulkbookmark-icon1"
                alt=""
                src="/vuesaxbulklogout@2x.png"
              />
              <div className="bookmarks">Logout</div>
            </div>
          </div>
        </section>
        <div className="profile-inner" onClick={onFrameContainer5Click}>
          <div className="frame-wrapper4">
            <div className="vuesaxoutlineedit-2-parent">
              <img
                className="vuesaxoutlineedit-2-icon1"
                alt=""
                src="/vuesaxoutlineedit2@2x.png"
              />
              <div className="bookmarks">Edit Profile</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Frame12;
