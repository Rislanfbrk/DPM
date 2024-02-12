import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent2 from "../components/GroupComponent2";
import "./Frame7.css";

const Frame7 = () => {
  const navigate = useNavigate();

  const onVuesaxbulkarrowSquareLeftIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    // Please sync "Virtual Tour" to the project
  }, []);

  const onReviewsTextClick = useCallback(() => {
    navigate("/listing-reviews");
  }, [navigate]);

  return (
    <div className="listing-details-parent">
      <main className="listing-details">
        <section className="image-11" />
        <section className="listing-details-child" />
        <div className="other-details">Other details</div>
        <div className="php-3000month1">PHP 3000/month</div>
        <div className="parcon-apartment1">Parcon Apartment</div>
        <img
          className="vuesaxbulkarrow-square-left-icon6"
          alt=""
          src="/vuesaxbulkarrowsquareleft@2x.png"
          onClick={onVuesaxbulkarrowSquareLeftIconClick}
        />
        <img
          className="vuesaxbulkarchive-tick-icon2"
          alt=""
          src="/vuesaxbulkarchivetick@2x.png"
        />
        <button className="rectangle-parent22" onClick={onGroupButtonClick}>
          <div className="group-child19" />
          <div className="virtual-tour1">Virtual Tour</div>
        </button>
        <div className="rectangle-parent23">
          <div className="group-child20" />
          <div className="kms-away2">2kms away</div>
        </div>
        <div className="vuesaxoutlinestar-group">
          <img
            className="vuesaxoutlinestar-icon2"
            alt=""
            src="/vuesaxoutlinestar@2x.png"
          />
          <div className="div3">3.4</div>
        </div>
        <div className="san-vicente-central1">
          San Vicente Central (Pob.), Calapan, Oriental Mindoro
        </div>
        <div className="we-have-3">We have 3 rooms available</div>
        <div className="see-more">See more</div>
        <div className="address">Address</div>
        <div className="description">Description</div>
        <div className="gallery">Gallery</div>
        <div className="image-2-parent">
          <img className="image-2-icon" alt="" src="/image-2@2x.png" />
          <img className="image-2-icon" alt="" src="/image-3@2x.png" />
          <img className="image-2-icon" alt="" src="/image-4@2x.png" />
        </div>
        <div className="avatar-group">
          <img className="avatar-icon4" alt="" src="/avatar@2x.png" />
          <div className="vuesaxbulkmessages-group">
            <img
              className="vuesaxbulkmessages-icon2"
              alt=""
              src="/vuesaxbulkmessages@2x.png"
            />
            <div className="lucy-heartfilia1">Lucy Heartfilia</div>
            <div className="owner1">Owner</div>
          </div>
        </div>
        <FrameComponent1 />
        <div className="group-parent3">
          <div className="rectangle-parent24">
            <input className="group-child21" type="text" />
            <div className="details1">Details</div>
          </div>
          <div className="reviews1" onClick={onReviewsTextClick}>
            Reviews
          </div>
        </div>
        <GroupComponent2 />
      </main>
    </div>
  );
};

export default Frame7;
