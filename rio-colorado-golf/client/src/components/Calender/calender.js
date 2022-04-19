import React from "react";

const Calender = () => {
  return (
    <div className="calender-container">
      <iframe
        src="//localendar.com/public/RioColoradoGC"
        height="1000"
        width="100%"
        marginHeight="0"
        marginWidth="0"
        scrolling="yes"
        // frameborder="0"
        border="0"
      ></iframe>
    </div>
  );
};

export default Calender;
