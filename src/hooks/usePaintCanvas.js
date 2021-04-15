import { useRef, useEffect } from "react";
import { DEFAULT_BRUSH } from "../const";

export const usePaintCanvas = () => {
  const canvas = useRef();
  const context = useRef();
  const isDrawing = useRef();

  const lastX = useRef(0);
  const lastY = useRef(0);

  const defaultBrushSetup = () => {
    Object.assign(context.current, DEFAULT_BRUSH);
  };

  const resizeCanvasToWindow = () => {
    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight;
  };

  /**
   * Assign a canvas context to ref
   */
  useEffect(() => {
    context.current = canvas?.current?.getContext("2d");
  }, []);

  /**
   * Resize a canvas to window size and set up a default brush
   */
  useEffect(() => {
    if (!canvas?.current || !context?.current) {
      return;
    }

    resizeCanvasToWindow();
    defaultBrushSetup();
  }, []);

  const drawNormal = (e) => {
    if (!isDrawing.current || !context?.current) return;

    context.current.beginPath();
    context.current.moveTo(lastX.current, lastY.current);
    context.current.lineTo(e.offsetX, e.offsetY);
    context.current.stroke();

    [lastX.current, lastY.current] = [e.offsetX, e.offsetY];
  };

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    [lastX.current, lastY.current] = [e.offsetX, e.offsetY];
  };

  const stopDrawing = () => {
    isDrawing.current = false;
  };

  useEffect(() => {
    canvas.current.addEventListener("mousedown", handleMouseDown);
    canvas.current.addEventListener("mousemove", drawNormal);
    canvas.current.addEventListener("mouseup", stopDrawing);
    canvas.current.addEventListener("mouseout", stopDrawing);
  }, []);

  return {
    canvas,
  };
};
