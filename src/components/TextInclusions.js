import { useMemo } from "react";
import "./TextInclusions.css";

const TextInclusions = ({
  vuesaxoutlinetickCircle,
  text = "text",
  showGroup79 = true,
  textInclusionsPosition,
  groupDivWidth,
  groupDivRight,
  vuesaxoutlinetickCircleIcWidth,
  vuesaxoutlinetickCircleIcRight,
  textLeft,
}) => {
  const textInclusionsStyle = useMemo(() => {
    return {
      position: textInclusionsPosition,
    };
  }, [textInclusionsPosition]);

  const groupDivStyle = useMemo(() => {
    return {
      width: groupDivWidth,
      right: groupDivRight,
    };
  }, [groupDivWidth, groupDivRight]);

  const vuesaxoutlinetickCircleIconStyle = useMemo(() => {
    return {
      width: vuesaxoutlinetickCircleIcWidth,
      right: vuesaxoutlinetickCircleIcRight,
    };
  }, [vuesaxoutlinetickCircleIcWidth, vuesaxoutlinetickCircleIcRight]);

  const textStyle = useMemo(() => {
    return {
      left: textLeft,
    };
  }, [textLeft]);

  return (
    <div className="text-inclusions" style={textInclusionsStyle}>
      {showGroup79 && (
        <div className="vuesaxoutlinetick-circle-parent" style={groupDivStyle}>
          <img
            className="vuesaxoutlinetick-circle-icon1"
            alt=""
            src={vuesaxoutlinetickCircle}
            style={vuesaxoutlinetickCircleIconStyle}
          />
          <div className="text" style={textStyle}>
            {text}
          </div>
        </div>
      )}
    </div>
  );
};

export default TextInclusions;
