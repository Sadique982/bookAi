import React from "react";
import "./AiDemo.css";
function AiDemo(props) {
  return (
    <div className="aiDemo md:mx-20 md:p-5 lg:p-10 rounded-xl relative overflow-hidden md:h-full">
      {props.imgSrc != null ? (
        <img
          src={props.imgSrc}
          alt={props.altText}
          className="w-full rounded-xl"
        />
      ) : (
        <div className="video-embed-container ">
          <iframe
            src="https://app.arcade.software/share/OvUdnIEhwNxssQsB3COY?ref=share-link"
            title="Arcade Video"
            width="100%"
            height="500rem"
            className="rounded-lg shadow-lg scale-100 hidden md:block"
          ></iframe>
        </div>
      )}
      {props.fltImg != null ? (
        <div className="floating-ui p-3 h-2/5 rounded-xl md:flex hidden">
          <div className="floating-icon w-6 h-6 my-auto rounded-full bg-gradient1 m-2"></div>
          <img src={props.fltImg} className="rounded-xl" />
        </div>
      ) : (
        ""
      )}
      <div className="floating-ui-bottom p-3 rounded-xl md:flex hidden">
        <div className="floating-icon w-5 h-5 my-auto rounded-full bg-gradient1 m-2"></div>
        Chapter Complete
      </div>
    </div>
  );
}

export default AiDemo;
