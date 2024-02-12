import { useState, useCallback } from "react";
import SuccessRent from "../components/SuccessRent";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Property1Default from "../components/Property1Default";
import "./Frame4.css";

const Frame4 = () => {
  const [isSuccessRentOpen, setSuccessRentOpen] = useState(false);
  const navigate = useNavigate();

  const onVuesaxbulkarrowSquareLeftIconClick = useCallback(() => {
    navigate("/listing-details");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/rent");
  }, [navigate]);

  const openSuccessRent = useCallback(() => {
    setSuccessRentOpen(true);
  }, []);

  const closeSuccessRent = useCallback(() => {
    setSuccessRentOpen(false);
  }, []);

  const onGroupButton6Click = useCallback(() => {
    navigate("/listing-details");
  }, [navigate]);

  return (
    <>
      <div className="rent-parent">
        <main className="rent">
          <section className="rent-child" />
          <img
            className="vuesaxbulkarrow-square-left-icon3"
            alt=""
            src="/vuesaxbulkarrowsquareleft@2x.png"
            onClick={onVuesaxbulkarrowSquareLeftIconClick}
          />
          <h2 className="rent1">Rent</h2>
          <h3 className="personal-details">Personal Details</h3>
          <h3 className="rental-details">Rental Details</h3>
          <div className="first-name">First Name</div>
          <div className="mobile-number">Mobile Number</div>
          <div className="email-address">Email Address</div>
          <div className="room-preference">Room Preference</div>
          <div className="start-date">Start Date</div>
          <div className="payment-method">Payment Method</div>
          <div className="last-name">Last Name</div>
          <button className="rectangle-parent13">
            <div className="group-child10" />
            <div className="datul">Datul</div>
          </button>
          <div className="rectangle-parent14">
            <div className="group-child11" />
            <div className="ana">Ana</div>
          </div>
          <button className="rectangle-parent15">
            <div className="group-child11" />
            <div className="datul">1234567890</div>
          </button>
          <button className="rectangle-parent16">
            <div className="group-child13" />
            <div className="datul">anadatul123@gmail.com</div>
          </button>
          <div className="chckbox-parent">
            <img className="chckbox-icon" alt="" src="/chckbox@2x.png" />
            <div className="single-room">Single Room</div>
          </div>
          <div className="chckbox-group">
            <img className="chckbox-icon" alt="" src="/chckbox@2x.png" />
            <div className="single-room">Shared Room</div>
          </div>
          <div className="group-parent1">
            <div className="rectangle-parent17">
              <div className="group-child10" />
              <div className="div1">06/23/2023</div>
            </div>
            <img
              className="vuesaxbulkcalendar-icon1"
              alt=""
              src="/vuesaxbulkcalendar@2x.png"
            />
          </div>
          <div className="instance-parent2">
            <Property1Default
              inPerson="In-person"
              property1DefaultBorder="none"
              property1DefaultPadding="0"
              property1DefaultBackgroundColor="transparent"
              inPersonDisplay="inline-block"
            />
            <Property1Default
              inPerson="Gcash"
              property1DefaultBorder="none"
              property1DefaultPadding="0"
              property1DefaultBackgroundColor="transparent"
              inPersonDisplay="inline-block"
            />
            <Property1Default
              inPerson="Paypal"
              property1DefaultBorder="none"
              property1DefaultPadding="0"
              property1DefaultBackgroundColor="transparent"
              inPersonDisplay="inline-block"
            />
          </div>
          <div className="rectangle-parent18" onClick={onGroupContainer4Click}>
            <div className="group-child15" onClick={openSuccessRent} />
            <div className="rent2">Rent</div>
            <button
              className="rectangle-parent19"
              onClick={onGroupButton6Click}
            >
              <div className="group-child16" />
              <div className="cancel">Cancel</div>
            </button>
          </div>
        </main>
      </div>
      {isSuccessRentOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSuccessRent}
        >
          <SuccessRent onClose={closeSuccessRent} />
        </PortalPopup>
      )}
    </>
  );
};

export default Frame4;
