import { useMemo } from "react";
import "./MessageItem.css";

const MessageItem = ({
  vuesaxbulkandroid,
  cHATBOT,
  messageHere,
  time,
  messageItemPosition,
  messageItemTop,
  messageItemLeft,
  cHATBOTMargin,
  cHATBOTFontWeight,
  messageHereTop,
  messageHereMargin,
  messageHereFontWeight,
}) => {
  const messageItemStyle = useMemo(() => {
    return {
      position: messageItemPosition,
      top: messageItemTop,
      left: messageItemLeft,
    };
  }, [messageItemPosition, messageItemTop, messageItemLeft]);

  const cHATBOTStyle = useMemo(() => {
    return {
      margin: cHATBOTMargin,
      fontWeight: cHATBOTFontWeight,
    };
  }, [cHATBOTMargin, cHATBOTFontWeight]);

  const messageHereStyle = useMemo(() => {
    return {
      top: messageHereTop,
      margin: messageHereMargin,
      fontWeight: messageHereFontWeight,
    };
  }, [messageHereTop, messageHereMargin, messageHereFontWeight]);

  return (
    <div className="message-item" style={messageItemStyle}>
      <img className="vuesaxbulkandroid-icon1" alt="" src={vuesaxbulkandroid} />
      <div className="chatbot-parent">
        <b className="chatbot" style={cHATBOTStyle}>
          {cHATBOT}
        </b>
        <div className="message-here" style={messageHereStyle}>
          {messageHere}
        </div>
        <div className="time">{time}</div>
      </div>
    </div>
  );
};

export default MessageItem;
