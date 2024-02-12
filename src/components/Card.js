import { useMemo } from "react";
import Media from "./Media";
import "./Card.css";

const Card = ({
  propertyTitle,
  monthlyRent,
  propertyImageId,
  propTop,
  propLeft,
}) => {
  const cardStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <section className="card1" style={cardStyle}>
      <div className="card-header">
        <Media
          avatar="/avatar@2x.png"
          frankEsteban="Lucy Heartfilia"
          webDevelopment="Owner"
          showAvatarIcon
          showMediaOption={false}
          mediaWidth="270px"
          mediaPosition="absolute"
          mediaTop="calc(50% - 29.5px)"
          mediaLeft="15px"
          mediaHeight="60px"
          frankEstebanFontFamily="Poppins"
          frankEstebanMargin="0"
          webDevelopmentFontFamily="Poppins"
        />
      </div>
      <div className="card-footer">
        <h1 className="eg-rusiana">{propertyTitle}</h1>
        <div className="php-2500month">{monthlyRent}</div>
      </div>
      <img className="image-5-icon" alt="" src={propertyImageId} />
    </section>
  );
};

export default Card;
