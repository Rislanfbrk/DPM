import { useState, useCallback } from "react";
import BookmarkExists from "./BookmarkExists";
import PortalPopup from "./PortalPopup";
import Bookmark from "./Bookmark";
import { useNavigate } from "react-router-dom";
import "./Carousel.css";

const Carousel = () => {
  const [isBookmarkExistsOpen, setBookmarkExistsOpen] = useState(false);
  const [isBookmarkOpen, setBookmarkOpen] = useState(false);
  const [isBookmark1Open, setBookmark1Open] = useState(false);
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/listing-details");
  }, [navigate]);

  const openBookmarkExists = useCallback(() => {
    setBookmarkExistsOpen(true);
  }, []);

  const closeBookmarkExists = useCallback(() => {
    setBookmarkExistsOpen(false);
  }, []);

  const openBookmark = useCallback(() => {
    setBookmarkOpen(true);
  }, []);

  const closeBookmark = useCallback(() => {
    setBookmarkOpen(false);
  }, []);

  const openBookmark1 = useCallback(() => {
    setBookmark1Open(true);
  }, []);

  const closeBookmark1 = useCallback(() => {
    setBookmark1Open(false);
  }, []);

  return (
    <>
      <div className="carousel2">
        <nav className="frame-group">
          <div className="frame-parent1" onClick={onFrameContainerClick}>
            <div className="frame3">
              <div className="frame4">
                <div className="vuesaxbulkmagic-star-group">
                  <img
                    className="vuesaxbulkmagic-star-icon5"
                    alt=""
                    src="/vuesaxbulkmagicstar@2x.png"
                  />
                  <div className="rate">3.4</div>
                </div>
                <img
                  className="vuesaxbulkarchive-tick-icon3"
                  alt=""
                  src="/vuesaxbulkarchivetick@2x.png"
                  onClick={openBookmarkExists}
                />
              </div>
              <div className="frame5">
                <div className="div5">3000/month</div>
                <img
                  className="currency-php-icon"
                  alt=""
                  src="/currencyphp@2x.png"
                />
              </div>
            </div>
            <div className="frame6">
              <div className="kms-away3">2kms away</div>
              <h2 className="dreamplace">Parcon Apartment</h2>
            </div>
          </div>
          <div className="frame-parent2">
            <div className="frame7">
              <div className="frame8">
                <img
                  className="vuesaxbulkarchive-add-icon"
                  alt=""
                  src="/vuesaxbulkarchiveadd@2x.png"
                  onClick={openBookmark}
                />
                <div className="vuesaxbulkmagic-star-container">
                  <img
                    className="vuesaxbulkmagic-star-icon6"
                    alt=""
                    src="/vuesaxbulkmagicstar@2x.png"
                  />
                  <div className="rate1">4</div>
                </div>
              </div>
              <div className="frame9">
                <div className="div6">25000</div>
                <img
                  className="currency-php-icon1"
                  alt=""
                  src="/currencyphp.svg"
                />
              </div>
            </div>
            <div className="frame10">
              <div className="kms-away3">300m away</div>
              <h2 className="dreamplace">Kost Tiara 2</h2>
            </div>
          </div>
          <div className="frame-parent3">
            <div className="frame7">
              <div className="frame8">
                <img
                  className="vuesaxbulkarchive-add-icon1"
                  alt=""
                  src="/vuesaxbulkarchiveadd.svg"
                  onClick={openBookmark1}
                />
                <div className="vuesaxbulkmagic-star-parent1">
                  <img
                    className="vuesaxbulkmagic-star-icon7"
                    alt=""
                    src="/vuesaxbulkmagicstar.svg"
                  />
                  <div className="rate2">3</div>
                </div>
              </div>
              <div className="frame13">
                <div className="div7">2000/month</div>
                <img
                  className="currency-php-icon2"
                  alt=""
                  src="/currencyphp.svg"
                />
              </div>
            </div>
            <div className="frame14">
              <div className="kms-away3">1.4kms away</div>
              <h2 className="dreamplace">DreamPlace</h2>
            </div>
          </div>
        </nav>
      </div>
      {isBookmarkExistsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeBookmarkExists}
        >
          <BookmarkExists onClose={closeBookmarkExists} />
        </PortalPopup>
      )}
      {isBookmarkOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeBookmark}
        >
          <Bookmark onClose={closeBookmark} />
        </PortalPopup>
      )}
      {isBookmark1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeBookmark1}
        >
          <Bookmark onClose={closeBookmark1} />
        </PortalPopup>
      )}
    </>
  );
};

export default Carousel;
