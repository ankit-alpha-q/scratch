import React, { useState } from "react";
import Icon from "./Icon";

export default function Sidebar() {
  const [option, updateOption] = useState("1");
  return (
    <div className="w-80 flex-none h-full flex items-start p-2 border-r border-gray-200">
      <div className="w-16 h-full border-r border-gray-200 pr-2 pt-2">
        <div className="h-16">
          <div
            className={`text-center px-4 py-1 absolute left-1 rounded-l-xl w-20 cursor-pointer " ${
              option == "1" ? "bg-indigo-200" : "hover:bg-indigo-100"
            }`}
            onClick={() => {
              updateOption("1");
              document.getElementsByClassName("sidebox")[0].scrollTo(0, 0);
            }}
          >
            <div className="h-8 w-8 bg-blue-500 rounded-full mx-auto"></div>
            Motion
          </div>
        </div>
        <div className="h-16">
          <div
            className={`text-center px-4 py-1 absolute left-1 rounded-l-xl w-20 cursor-pointer " ${
              option == "2" ? "bg-purple-200" : "hover:bg-purple-100"
            }`}
            onClick={() => {
              updateOption("2");
              document
                .getElementsByClassName("sidebox")[0]
                .scrollTo(0, (window.innerHeight - 50) / 2);
            }}
          >
            <div className="h-8 w-8 bg-purple-400 rounded-full mx-auto"></div>
            Looks
          </div>
        </div>
        <div className="h-16">
          <div
            className={`text-center px-4 py-1 absolute left-1 rounded-l-xl w-20 cursor-pointer " ${
              option == "3" ? "bg-yellow-200" : "hover:bg-yellow-100"
            }`}
            onClick={() => {
              updateOption("3");
              document
                .getElementsByClassName("sidebox")[0]
                .scrollTo(0, window.innerHeight - 50);
            }}
          >
            <div className="h-8 w-8 bg-yellow-400 rounded-full mx-auto"></div>
            Events
          </div>
        </div>
        <div className="h-16">
          <div
            className={`text-center px-4 py-1 absolute left-1 rounded-l-xl w-20 cursor-pointer " ${
              option == "4" ? "bg-red-200" : "hover:bg-red-100"
            }`}
            onClick={() => {
              updateOption("4");
              document
                .getElementsByClassName("sidebox")[0]
                .scrollTo(0, (window.innerHeight - 50) / 0.67);
            }}
          >
            <div className="h-8 w-8 bg-red-400 rounded-full mx-auto"></div>
            Control
          </div>
        </div>
      </div>
      <div className="w-60 p-2 h-full overflow-y-auto  sidebox">
        <div className="h-1/2">
          <div className="font-bold"> {"Motion"} </div>
          <div
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("id", JSON.stringify({
                message:'Move 10 steps',
                type:'motion',
              }));
            }}
            className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm properties"
          >
            {"Move 10 steps"}
          </div>
          <div
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("id", JSON.stringify({
                message:'Turn right 15deg',
                type:'motion',
              }));
            }}
            className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm properties"
          >
            {"Turn "}
            <Icon name="undo" size={15} className="text-white mx-2" />
            {"15 degrees"}
          </div>
          <div
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("id", JSON.stringify({
                message:'Turn left 15deg',
                type:'motion',
              }));
            }}
            className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm properties"
          >
            {"Turn "}
            <Icon name="redo" size={15} className="text-white mx-2" />
            {"15 degrees"}
          </div>
        </div>

        <div className="h-1/2">
          <div className="font-bold"> {"Looks"} </div>
          <div
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("id", JSON.stringify({
                message:'Say hello! for 2 mins.',
                type:'looks',
              }));
            }}
            className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm properties"
          >
            {"Say Hello! for 2minutes"}
          </div>
          <div
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("id", JSON.stringify({
                message:'Say Hello',
                type:'looks',
              }));
            }}
            className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm properties"
          >
            {"Say Hello!"}
          </div>
        </div>

        <div className="h-1/2">
          <div className="font-bold"> {"Events"} </div>
          <div
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("id", JSON.stringify({
                message:'When flag clicked',
                type:'event',
              }));
            }}
            className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm properties"
          >
            {"When "}
            <Icon name="flag" size={15} className="text-green-600 mx-2" />
            {"clicked"}
          </div>
          <div
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("id", JSON.stringify({
                message:'When sprite clicked',
                type:'event',
              }));
            }}
            className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm properties"
          >
            {"When this sprite clicked"}
          </div>
        </div>

        <div className="h-full">
          <div className="font-bold"> {"Control"} </div>
          <div
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("id", JSON.stringify({
                message:'Wait 1 second',
                type:'control',
              }));
            }}
            className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm properties"
          >
            {"Wait 1 second"}
          </div>
          <div
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("id", JSON.stringify({
                message:'Repeat 10',
                type:'control',
              }));
            }}
            className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm properties"
          >
            {"Repeat 10"}
          </div>
        </div>
      </div>
    </div>
  );
}
