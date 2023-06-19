import React from "react";

const PopUp = ({ content, handleClose, widthStyle }) => {
  console.log(widthStyle);
  return (
    <div className="popup">
      <div className="popupInner" style={{ width: widthStyle }}>
        {/* <button className="close-btn" onClick={handleClose}>
          x
        </button> */}
        {content}
        <div className="closeBtn">
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
