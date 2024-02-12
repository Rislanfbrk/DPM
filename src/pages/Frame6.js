import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Review from "../components/Review";
import GroupComponent1 from "../components/GroupComponent1";
import "./Frame6.css";

const Frame6 = () => {
  const navigate = useNavigate();

  const onVuesaxbulkarrowSquareLeftIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    // Please sync "Virtual Tour" to the project
  }, []);

  const onGroupContainerClick = useCallback(() => {
    navigate("/listing-details");
  }, [navigate]);

  return (
    <div className="listing-reviews-parent">
      <main className="listing-reviews">
        <section className="image-1" />
        <section className="listing-reviews-child" />
        <div className="php-3000month">PHP 3000/month</div>
        <h1 className="parcon-apartment">Parcon Apartment</h1>
        <img
          className="vuesaxbulkarrow-square-left-icon5"
          alt=""
          src="/vuesaxbulkarrowsquareleft@2x.png"
          onClick={onVuesaxbulkarrowSquareLeftIconClick}
        />
        <img
          className="vuesaxbulkarchive-tick-icon1"
          alt=""
          src="/vuesaxbulkarchivetick@2x.png"
        />
        <button className="rectangle-parent20" onClick={onGroupButtonClick}>
          <div className="group-child17" />
          <div className="virtual-tour">Virtual Tour</div>
        </button>
        <div className="rectangle-parent21">
          <div className="group-child18" />
          <h1 className="kms-away1">2kms away</h1>
        </div>
        <div className="vuesaxoutlinestar-parent">
          <img
            className="vuesaxoutlinestar-icon1"
            alt=""
            src="/vuesaxoutlinestar@2x.png"
          />
          <div className="div2">3.4</div>
        </div>
        <div className="avatar-parent">
          <img className="avatar-icon3" alt="" src="/avatar@2x.png" />
          <div className="vuesaxbulkmessages-parent">
            <img
              className="vuesaxbulkmessages-icon1"
              alt=""
              src="/vuesaxbulkmessages@2x.png"
            />
            <h2 className="lucy-heartfilia">Lucy Heartfilia</h2>
            <div className="owner">Owner</div>
          </div>
        </div>
        <div className="group-parent2">
          <div className="details-wrapper" onClick={onGroupContainerClick}>
            <h1 className="details">Details</h1>
          </div>
          <div className="reviews-parent">
            <h1 className="details">Reviews</h1>
            <input className="rectangle-input" type="text" />
          </div>
        </div>
        <Review />
        <div className="the-location-is">{`The location is near DWCC. `}</div>
        <GroupComponent1 />
      </main>
    </div>
  );
};

export default Frame6;
