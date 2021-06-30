import React, { useState, useEffect } from "react";

export default function MidArea() {
  const [items, updateItems] = useState([]);
  const [deg, updateDeg] = useState(0);
  const [left, updateLeft] = useState(0);
  const singleAnimation = (data) =>{
    if(data.message == 'Turn right 15deg'){
      updateDeg(deg+15)
    }
    if(data.message == 'Turn left 15deg'){
      updateDeg(deg-15)
    }
    if(data.message == 'Move 10 steps'){
      updateLeft(left+10);
    }
  }

  useEffect(()=>{
    $( ".cat" ).css({'transform': `rotate(${deg}deg)`})
  },[deg])

  useEffect(()=>{
    $( ".cat" ).css({'marginLeft': `${left}px`})
  },[left])

  return (
    <div
      className="flex-1 h-full overflow-auto pl-3 pl-2"
      onDrop={(e) => {
        updateItems([...items, JSON.parse(e.dataTransfer.getData("id"))]);
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        {items.map((i,index) => {
          return <div key={index}
            className={`flex flex-row flex-wrap text-white px-2 py-1 my-2 text-sm cursor-pointer ${
              i.type == "motion"
                ? "bg-blue-500"
                : i.type == "looks"
                ? "bg-purple-500"
                : i.type == "event"
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
            onClick={()=>{singleAnimation(i)}}
          >
            {i.message}
          </div>;
        })}
      </div>
    </div>
  );
}
