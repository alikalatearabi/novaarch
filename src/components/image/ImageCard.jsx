import React, { useEffect, useRef } from "react";
import Image from "next/image";
import testimage from "../../../public/images/testImage.jpg";
import {
  selectImageBrightness,
  selectImageSharpness,
  selectImageShadow,
  selectImageZoomLevel,
  RsetImageZoomLevel,
} from "@/slices/imageSlices";
import { useSelector, useDispatch } from "react-redux";
import Pannellum from "./Pannellum";

const ImageCard = () => {
  const dispatch = useDispatch();
  const imageBrightness = useSelector(selectImageBrightness);
  const imageSharpness = useSelector(selectImageSharpness);
  const imageShadow = useSelector(selectImageShadow);
  const imageZoomLevel = useSelector(selectImageZoomLevel);
  //for scroll image zoom level
  const containerRef = useRef(null);

  const shadowAmount = 1 + imageShadow / 100;
  // const shadow = `drop-shadow(0 0 ${imageShadow}px rgba(0, 0, 0, ${imageShadow / 100}))`;

  // const bright = `brightness-[${imageBrightness * 2}%]`;

  const handleZoomIn = () => {
    dispatch(RsetImageZoomLevel(Math.min(imageZoomLevel + 0.1, 3)));
  };

  const handleZoomOut = () => {
    dispatch(RsetImageZoomLevel(Math.max(imageZoomLevel - 0.1, 1)));
  };

  //image scroll zoomLevel
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [imageZoomLevel]);

  const handleWheel = (event) => {
    event.preventDefault();
    if (event.deltaY < 0) {
      handleZoomIn(); // Scrolling up (zoom in)
    } else {
      handleZoomOut(); // Scrolling down (zoom out)
    }
  };

  const bright = imageBrightness * 2;
  return (
    <div id="image"  ref={containerRef}>
      <div>
        {/* make this on the sandbox and make it done */}
        {/* <div
        id="sharpness"
        className={`h-[90vh] sharpen`}
        style={{
          mixBlendMode: "hard-light",
        }}
      >
        shayan
      </div> */}
        <Pannellum/>
      </div>
    </div>
  );
};

export default ImageCard;
