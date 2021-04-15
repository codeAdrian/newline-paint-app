import React from "react";
import { Canvas } from "./components";
import { usePaintCanvas } from "./hooks";

export const App = () => {
  const { canvas } = usePaintCanvas();

  return (
    <>
      <Canvas canvasRef={canvas} />
    </>
  );
};
