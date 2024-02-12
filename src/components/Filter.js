import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Filter.css";

const Filter = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/search-text-filter");
  }, [navigate]);

  return (
    <div className="filter">
      <div className="rectangle-parent" onClick={onGroupContainerClick}>
        <div className="group-child" />
        <div className="filter1">Filter</div>
      </div>
      <div className="ratings">Ratings</div>
      <div className="price-range-parent">
        <div className="price-range">Price Range</div>
        <div className="range-slider-parent">
          <div className="range-slider" />
          <div className="group-item" />
          <div className="bullet">
            <div className="bullet-child" />
          </div>
          <div className="bullet1">
            <div className="bullet-item" />
          </div>
        </div>
        <div className="rectangle-group">
          <div className="group-inner" />
          <div className="php-000">PHP 0.00</div>
        </div>
        <div className="rectangle-container">
          <div className="group-inner" />
          <div className="php-250000">PHP 2500.00</div>
        </div>
        <div className="group-child1" />
      </div>
      <div className="bullet-wrapper">
        <div className="bullet2" />
      </div>
      <div className="group-parent">
        <div className="range-slider-group">
          <div className="range-slider1">
            <div className="range-slider-child" />
          </div>
          <div className="ellipse-div" />
          <div className="bullet3">
            <div className="bullet-child" />
          </div>
        </div>
        <div className="distance">Distance</div>
        <div className="group-div">
          <div className="group-child2" />
          <div className="kms">6kms</div>
        </div>
      </div>
      <div className="location-parent">
        <div className="location">Location</div>
        <div className="rectangle-parent1">
          <div className="group-child3" />
          <div className="gov-infantado-st">
            {" "}
            Gov. Infantado St., Calapan, Philippines, 5200
          </div>
        </div>
      </div>
      <div className="vuesaxbulkmagic-star-parent">
        <img
          className="vuesaxbulkmagic-star-icon"
          alt=""
          src="/vuesaxbulkmagicstar.svg"
        />
        <img
          className="vuesaxbulkmagic-star-icon"
          alt=""
          src="/vuesaxbulkmagicstar.svg"
        />
        <img
          className="vuesaxbulkmagic-star-icon"
          alt=""
          src="/vuesaxbulkmagicstar.svg"
        />
        <img
          className="vuesaxbulkmagic-star-icon"
          alt=""
          src="/vuesaxoutlinemagicstar.svg"
        />
        <img
          className="vuesaxbulkmagic-star-icon"
          alt=""
          src="/vuesaxoutlinemagicstar.svg"
        />
      </div>
    </div>
  );
};

export default Filter;
