import { BASE_URL } from "@/config";
import React from "react";
import { ImageZoom } from "react-responsive-image-zoom";

const App = (props: any) => {
  return (
    <ImageZoom
      src={`${BASE_URL}${props.picture || ""}`}
      defaultZoomFactor={2}
      transition={0.5}
      width={500}
      height={500}
      alt={props.alt}
      className=" rounded-lg"
      imgClassName=" h-[500px] border bg-white object-contain rounded-lg"
      debug={false}
    />
  );
};

export default App;
