import React from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import './style.css';

export default function App() {
  return (
    <div className="bg-blue-100 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden p-2">
          <div className="bg-white border-t border-r border-gray-200 rounded-xl p-2 h-full flex">
            <Sidebar /> <MidArea />
          </div>
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row p-2">
          <div className="bg-white border-t border-r border-gray-200 rounded-xl p-2 h-full w-full">
          <PreviewArea />
          </div>
        </div>
      </div>
    </div>
  );
}
