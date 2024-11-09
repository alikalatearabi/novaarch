"use client"; // Add this line if using Next.js 13 with the app directory.
import React, {  useCallback } from "react";
import ReactPannellum, { getConfig } from "react-pannellum";
import image from "../../../public/images/rahpooai/1402-06-25/L03-01-B1.jpg";

const Pannellum = () => {


  // Click handler for logging config
  const click = useCallback(() => {
    console.log(getConfig());
  }, []);

  // Pannellum configuration
  const config = {
    autoLoad: true,
  };
  const imageSrc =image.src || image;

  return (
    <div className="text-blue-400 m-auto">

      
        <ReactPannellum
          className="m-auto"
          id="1"
          sceneId="firstScene"
          imageSource={imageSrc}
          config={config}
        />
    
      <div onClick={click} style={{ cursor: "pointer" }}>
        Click me
      </div>
      
    </div>
  );
};

export default Pannellum;
