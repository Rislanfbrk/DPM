import { useMemo } from "react";
import "./MediaContent.css";

const MediaContent = ({
  frankEsteban,
  webDevelopment,
  frankEstebanFontFamily,
  frankEstebanMargin,
  webDevelopmentFontFamily,
}) => {
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
    <div className="media-content">
      <div className="frank-esteban" style={frankEstebanStyle}>
        {frankEsteban}
      </div>
      <div className="web-development" style={webDevelopmentStyle}>
        {webDevelopment}
      </div>
    </div>
  );
};

export default MediaContent;
