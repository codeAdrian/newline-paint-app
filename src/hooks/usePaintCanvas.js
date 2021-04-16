import { useEffect, useRef } from "react";
import { useBrush } from "./useBrush";
import { useCanvasActions } from "./useCanvasActions";

import { DEFAULT_BRUSH } from "../const";

export const usePaintCanvas = (brushConfig) => {
  /**
   * SETUP
   */
  const context = useRef();
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

  const getCanvasContext = () => {
    if (!canvas.current) {
      return;
    }

    context.current = canvas.current.getContext("2d");
  };

  const configureCanvasBrush = () => {
    if (!context.current) {
      return;
    }

    Object.assign(context.current, DEFAULT_BRUSH, brushConfig);
  };

  /**
   * SIDE-EFFECTS
   */

  useEffect(resizeCanvasToWindow, []);
  useEffect(getCanvasContext, []);
  useEffect(configureCanvasBrush, [brushConfig]);

  /**
   * CUSTOM HOOKS
   */

  useBrush(canvas, context);

  const actions = useCanvasActions(canvas, context);

  /**
   * RETURN STATEMENT
   */

  return {
    actions,
    canvas,
  };
};
