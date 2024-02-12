import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame11.css";

const Frame11 = () => {
  const navigate = useNavigate();

  const onVuesaxbulkarrowSquareLeftIconClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onGroupButton3Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className="edit-profile-parent">
      <main className="edit-profile">
        <img
          className="vuesaxbulkarrow-square-left-icon7"
          alt=""
          src="/vuesaxbulkarrowsquareleft@2x.png"
          onClick={onVuesaxbulkarrowSquareLeftIconClick}
        />
        <h3 className="edit-profile1">Edit Profile</h3>
        <img className="edit-profile-child" alt="" src="/group-76@2x.png" />
        <div className="personal-details1">Personal Details</div>
        <div className="first-name1">First Name</div>
        <div className="mobile-number1">Mobile Number</div>
        <div className="email-address1">Email Address</div>
        <div className="address1">Address</div>
        <div className="last-name1">Last Name</div>
        <button className="rectangle-parent25">
          <div className="group-child22" />
          <div className="datul1">Datul</div>
        </button>
        <div className="rectangle-parent26">
          <div className="group-child23" />
          <div className="marpoyan-pekanbaru">Ana</div>
        </div>
        <button className="rectangle-parent27">
          <div className="group-child23" />
          <div className="datul1">1234567890</div>
        </button>
        <button className="rectangle-parent28">
          <div className="group-child25" />
          <div className="datul1">anadatul123@gmail.com</div>
        </button>
        <div className="rectangle-parent29">
          <div className="group-child26" />
          <div className="marpoyan-pekanbaru">Marpoyan, Pekanbaru</div>
        </div>
        <div className="rectangle-parent30">
          <div className="group-child27" onClick={onRectangleClick} />
          <div className="save">Save</div>
          <button className="rectangle-parent31" onClick={onGroupButton3Click}>
            <div className="group-child28" />
            <div className="cancel1">Cancel</div>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Frame11;
