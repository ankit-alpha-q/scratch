import React from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea() {
  return (
    <div className="flex-none h-full overflow-hidden p-2">
      <div className='spriteWrapper'>
        <CatSprite />
      </div>
    </div>
  );
}
