import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import "./Frame.css";

const Frame = () => {
  const navigate = useNavigate();

  const onVuesaxbulkarrowSquareLeftIconClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className="settings-user-parent">
      <div className="settings-user">
        <img
          className="vuesaxbulkarrow-square-left-icon1"
          alt=""
          src="/vuesaxbulkarrowsquareleft.svg"
          onClick={onVuesaxbulkarrowSquareLeftIconClick}
        />
        <FrameComponent />
        <div className="frame-div">
          <div className="rectangle-parent11">
            <div className="group-child7" />
            <div className="privacy-settings-parent">
              <div className="privacy-settings">Privacy Settings</div>
              <img className="vector-icon5" alt="" src="/vector.svg" />
              <img
                className="vuesaxbulklock-circle-icon1"
                alt=""
                src="/vuesaxbulklockcircle.svg"
              />
            </div>
          </div>
          <div className="rectangle-parent12">
            <div className="group-child7" />
            <div className="change-password-parent">
              <div className="change-password">Change Password</div>
              <img className="vector-icon6" alt="" src="/vector.svg" />
              <img
                className="vuesaxbulklock-circle-icon1"
                alt=""
                src="/vuesaxbulkpasswordcheck.svg"
              />
            </div>
          </div>
        </div>
        <div className="settings">Settings</div>
      </div>
    </div>
  );
};

export default Frame;
