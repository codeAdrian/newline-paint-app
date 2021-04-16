import React from "react";
import { Canvas, Toolbar } from "./components";
import { usePaintCanvas, useToolbar } from "./hooks";

export const App = () => {
  const { brushConfig, handleConfigChange } = useToolbar();
  const { canvas, actions } = usePaintCanvas(brushConfig);

  return (
    <>
      <Toolbar {...actions} onChange={handleConfigChange} />
      <Canvas canvasRef={canvas} />
    </>
  );
};
