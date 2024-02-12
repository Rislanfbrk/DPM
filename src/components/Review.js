import "./Review.css";

const Review = () => {
  return (
    <section className="review">
      <div className="card">
        <div className="background" />
      </div>
      <div className="rating1">
        <div className="star">star</div>
        <div className="star1">star</div>
        <div className="star2">star</div>
        <div className="star3">star</div>
        <div className="star-half">star-half</div>
      </div>
      <div className="userdoubleline">
        <div className="small">June 2, 2023</div>
        <div className="large">Kimmy Dora</div>
        <img
          className="uiuserpicture-icon"
          alt=""
          src="/uiuserpicture@2x.png"
        />
      </div>
    </section>
  );
};

export default Review;
