import { useRef, useEffect, useCallback } from "react";
import { DEFAULT_BRUSH } from "../const";

export const useBrush = (canvas) => {
  /**
   * SETUP
   */
  const context = useRef();
  const isDrawing = useRef(false);
  const previousCoordinates = useRef([0, 0]);

  /**
   * FUNCTION DEFINITIONS
   */

  const drawLine = (e) => {
    if (!context.current) {
      return;
    }

    context.current.beginPath();
    context.current.moveTo(...previousCoordinates.current);
    context.current.lineTo(e.offsetX, e.offsetY);
    context.current.stroke();
  };

  const updateCoordinates = (e) => {
    previousCoordinates.current = [e.offsetX, e.offsetY];
  };

  /**
   * EVENT HANDLERS
   */

  const drawMove = useCallback((e) => {
    if (!isDrawing.current || !context?.current) return;
    drawLine(e);
    updateCoordinates(e);
  }, []);

  const drawStart = useCallback((e) => {
    isDrawing.current = true;
    updateCoordinates(e);
  }, []);

  const drawStop = () => {
    isDrawing.current = false;
  };

  /**
   * SIDE-EFFECTS
   */

  useEffect(() => {
    if (!canvas.current) {
      return;
    }
    context.current = canvas.current.getContext("2d");
    Object.assign(context.current, DEFAULT_BRUSH);
  }, [canvas]);

  useEffect(() => {
    const ref = canvas.current;

    if (ref) {
      ref.addEventListener("mousedown", drawStart);
      ref.addEventListener("mousemove", drawMove);
      ref.addEventListener("mouseup", drawStop);
      ref.addEventListener("mouseout", drawStop);
    }

    return () => {
      if (ref) {
        ref.removeEventListener("mousedown", drawStart);
        ref.removeEventListener("mousemove", drawMove);
        ref.removeEventListener("mouseup", drawStop);
        ref.removeEventListener("mouseout", drawStop);
      }
    };
  }, [canvas, drawMove, drawStart]);
};
