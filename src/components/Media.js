import { useMemo } from "react";
import MediaContent from "./MediaContent";
import "./Media.css";

const Media = ({
  avatar,
  frankEsteban,
  webDevelopment,
  showAvatarIcon,
  showMediaOption,
  mediaWidth,
  mediaPosition,
  mediaTop,
  mediaLeft,
  mediaHeight,
  frankEstebanFontFamily,
  frankEstebanMargin,
  webDevelopmentFontFamily,
}) => {
  const mediaStyle = useMemo(() => {
    return {
      width: mediaWidth,
      position: mediaPosition,
      top: mediaTop,
      left: mediaLeft,
      height: mediaHeight,
    };
  }, [mediaWidth, mediaPosition, mediaTop, mediaLeft, mediaHeight]);

  const frankEstebanStyle = useMemo(() => {
    return {
      fontFamily: frankEstebanFontFamily,
      margin: frankEstebanMargin,
    };
  }, [frankEstebanFontFamily, frankEstebanMargin]);

  const webDevelopmentStyle = useMemo(() => {
    return {
      fontFamily: webDevelopmentFontFamily,
    };
  }, [webDevelopmentFontFamily]);

  return (
    <div className="media" style={mediaStyle}>
      <div className="media-body">
        <div className="avatar">
          {showAvatarIcon && (
            <img className="avatar-icon2" alt="" src={avatar} />
          )}
        </div>
        <MediaContent
          frankEsteban="Frank Esteban"
          webDevelopment="Web Development"
          frankEstebanFontFamily="Roboto"
          frankEstebanMargin="unset"
          webDevelopmentFontFamily="Roboto"
        />
      </div>
      {showMediaOption && (
        <div className="media-option">
          <div className="icons">
            <img className="vector-icon2" alt="" src="/vector.svg" />
            <img className="vector-icon2" alt="" src="/vector.svg" />
            <img className="vector-icon2" alt="" src="/vector.svg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Media;
