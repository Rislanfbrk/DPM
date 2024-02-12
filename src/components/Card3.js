import { useMemo } from "react";
import Media from "./Media";
import "./Card3.css";

const Card3 = ({
  imageDimensions,
  characterName,
  propertyName,
  rentalPrice,
  imageDimensionsUrl,
  mediaBodyTop,
}) => {
  const card1Style = useMemo(() => {
    return {
      top: mediaBodyTop,
    };
  }, [mediaBodyTop]);

  return (
    <section className="card3" style={card1Style}>
      <div className="card-header2">
        <Media
          avatar="/avatar@2x.png"
          frankEsteban="Gray Fullbuster"
          webDevelopment="Owner"
          showAvatarIcon
          showMediaOption={false}
          mediaWidth="270px"
          mediaPosition="absolute"
          mediaTop="calc(50% - 29.5px)"
          mediaLeft="15px"
          mediaHeight="60px"
          frankEstebanFontFamily="Poppins"
          frankEstebanMargin="unset"
          webDevelopmentFontFamily="Poppins"
        />
      </div>
      <div className="card-footer2">
        <div className="hope-apartment">{propertyName}</div>
        <div className="php-6500month">{rentalPrice}</div>
      </div>
      <img className="image-5-icon2" alt="" src={imageDimensionsUrl} />
    </section>
  );
};

export default Card3;
