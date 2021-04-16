import { useEffect, useRef } from "react";
import { useBrush } from "./useBrush";

export const usePaintCanvas = () => {
  /**
   * SETUP
   */

  const canvas = useRef();

  /**
   * FUNCTION DEFINITIONS
   */

  const resizeCanvasToWindow = () => {
    if (!canvas?.current) {
      return;
    }

    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight;
  };

  /**
   * SIDE-EFFECTS
   */

  useEffect(resizeCanvasToWindow, []);

  /**
   * CUSTOM HOOKS
   */

  useBrush(canvas);

  /**
   * RETURN STATEMENT
   */

  return {
    canvas,
  };
};
