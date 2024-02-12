import { useMemo } from "react";
import "./CardItem.css";

const CardItem = ({
  bG,
  title = "Title",
  price = "Price",
  name1 = "Juan Dela Cruz",
  avatar,
  rate = "Rating",
  text = "kms away",
  showKmsAway = true,
  cardItemPosition,
  cardItemTop,
  cardItemLeft,
  titleMargin,
  kmsAwayLeft,
}) => {
  const cardItemStyle = useMemo(() => {
    return {
      position: cardItemPosition,
      top: cardItemTop,
      left: cardItemLeft,
    };
  }, [cardItemPosition, cardItemTop, cardItemLeft]);

  const titleStyle = useMemo(() => {
    return {
      margin: titleMargin,
    };
  }, [titleMargin]);

  const kmsAwayStyle = useMemo(() => {
    return {
      left: kmsAwayLeft,
    };
  }, [kmsAwayLeft]);

  return (
    <div className="card-item" style={cardItemStyle}>
      <img className="bg-icon" alt="" src={bG} />
      <div className="title">
        <div className="title1" style={titleStyle}>
          {title}
        </div>
        <div className="price">{price}</div>
      </div>
      <b className="juan-dela-cruz">{name1}</b>
      <img className="avatar-icon" alt="" src={avatar} />
      <div className="rating">{rate}</div>
      {showKmsAway && (
        <div className="kms-away" style={kmsAwayStyle}>
          {text}
        </div>
      )}
      <img
        className="vuesaxbulkmagic-star-icon3"
        alt=""
        src="/vuesaxbulkmagicstar.svg"
      />
    </div>
  );
};

export default CardItem;
