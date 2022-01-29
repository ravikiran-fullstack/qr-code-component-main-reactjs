import React from "react";
import "./QRCode.css";

const QRCode = () => {
  return (
    <div className='qrCodeCmp'>
      <div className='qrCodeCmpImg'></div>
      <div>
        <h3 className='heading'>
          Improve your front-end skills by building projects
        </h3>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default QRCode;
