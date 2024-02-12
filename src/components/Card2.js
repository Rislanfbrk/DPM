import Media from "./Media";
import "./Card2.css";

const Card2 = () => {
  return (
    <div className="card4">
      <div className="card-header3">
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
          frankEstebanMargin="unset"
          webDevelopmentFontFamily="Poppins"
        />
      </div>
      <div className="card-footer3">
        <div className="luntiang-tahanan">Luntiang Tahanan</div>
        <div className="php-2500month1">PHP 2500/month</div>
      </div>
      <img className="image-5-icon3" alt="" src="/image-5@2x.png" />
    </div>
  );
};

export default Card2;
