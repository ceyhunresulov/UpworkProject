import React from "react";
import BrowseFile from "../components/pagesComponents/BrowseFile";

function Drag() {
  return (
    <div className="bg-white h-full p-6 rounded-2xl">
      <h1 className="font-bold text-indigo-950 ">
        Welcome To Voice Transcribe
      </h1>
      <div className="w-full flex flex-row justify-center mt-8 ">
        <BrowseFile />
      </div>
    </div>
  );
}

export default Drag;
