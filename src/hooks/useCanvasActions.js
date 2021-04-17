import { useState } from "react";

export const useCanvasActions = (canvas, context) => {
  /**
   * SETUP
   */

  const [dataUrl, setDataUrl] = useState("#");

  /**
   * EVENT HANDLERS
   */

  const handleCanvasDownload = () => {
    if (!canvas.current) {
      return;
    }

    setDataUrl(canvas.current.toDataURL("image/png"));
  };

  const handleCanvasClear = () => {
    if (!context.current || !canvas.current) {
      return;
    }
    const config = [0, 0, canvas.current.width, canvas.current.height];

    context.current.clearRect(...config);
  };

  /**
   * RETURN STATEMENT
   */

  return { dataUrl, handleCanvasDownload, handleCanvasClear };
};
