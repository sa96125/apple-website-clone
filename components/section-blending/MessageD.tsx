import React from "react";

function MessageD() {
  return (
    <div className="sticky-wrapper message-item d">
      {/* desktop */}
      <p className="desktop-text">매끈한 디자인. 뛰어난 착용감.</p>

      {/* mobile */}
      <p className="mobile-text">
        매끈한 디자인. 뛰어난
        <br /> 착용감.
      </p>
    </div>
  );
}

export default MessageD;
