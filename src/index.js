import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { ImageSizeContext } from "./Context.js";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));

function ImageSizeContextProvider(props) {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <ImageSizeContext.Provider
      value={{ imageSize: imageSize, isLarge, setIsLarge }}
    >
      {props.children}
    </ImageSizeContext.Provider>
  );
}

root.render(
  <StrictMode>
    <ImageSizeContextProvider>
      
      <App />
    </ImageSizeContextProvider>
  </StrictMode>
);
