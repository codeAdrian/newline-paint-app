import React from "react";
import { DEFAULT_BRUSH } from "../const";

export const Toolbar = ({
  onChange,
  dataUrl,
  handleCanvasDownload,
  handleCanvasClear,
}) => {
  return (
    <aside>
      <div>
        <input
          onChange={onChange}
          type="radio"
          name="globalCompositeOperation"
          value="source-over"
          id="tool-brush"
          defaultChecked
        />
        <label htmlFor="tool-brush">Brush</label>
      </div>
      <div>
        <input
          onChange={onChange}
          type="radio"
          name="globalCompositeOperation"
          value="destination-out"
          id="tool-eraser"
        />
        <label htmlFor="tool-eraser">Eraser</label>
      </div>

      <input
        onChange={onChange}
        name="strokeStyle"
        type="color"
        defaultValue={DEFAULT_BRUSH.strokeStyle}
      />
      <input
        onChange={onChange}
        name="lineWidth"
        type="range"
        min="1"
        max="100"
        defaultValue={DEFAULT_BRUSH.lineWidth}
      />

      <a download="image.png" onClick={handleCanvasDownload} href={dataUrl}>
        Save Image
      </a>

      <button onClick={handleCanvasClear}>Clear</button>
    </aside>
  );
};
