import Media from "./Media";
import "./Card1.css";

const Card1 = () => {
  return (
    <section className="card2">
      <div className="card-header1">
        <Media
          avatar="/avatar@2x.png"
          frankEsteban="Gray Fullbuster"
          webDevelopment="Owner"
          showAvatarIcon={false}
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
        <img className="avatar-icon5" alt="" src="/avatar@2x.png" />
      </div>
      <div className="card-footer1">
        <h1 className="calapan-dormitory">Calapan Dormitory</h1>
        <div className="php-3500month">PHP 3500/month</div>
      </div>
      <img className="image-5-icon1" alt="" src="/image-5@2x.png" />
    </section>
  );
};

export default Card1;
