import { useState } from "react";
import { DEFAULT_BRUSH } from "../const";

export const useToolbar = () => {
  /**
   * SETUP
   */

  const [brushConfig, setBrushConfig] = useState({
    globalCompositeOperation: DEFAULT_BRUSH.globalCompositeOperation,
    strokeStyle: DEFAULT_BRUSH.strokeStyle,
    lineWidth: DEFAULT_BRUSH.lineWidth,
  });

  /**
   * EVENT HANDLER
   */

  const handleConfigChange = (e) => {
    const { value, name } = e.currentTarget;
    setBrushConfig({ ...brushConfig, [name]: value });
  };

  /**
   * RETURN STATEMENT
   */

  return { brushConfig, handleConfigChange };
};
