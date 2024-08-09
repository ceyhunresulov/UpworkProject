import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from "../buttons/Button";

function BrowseFile() {
  return (
    <div className="w-1/2 bg-gray-100 p-6 rounded-xl">
      <div className="border border-dashed border-indigo-950 flex flex-col items-center gap-4 p-4 rounded-xl">
        <FaCloudUploadAlt className="text-indigo-900 size-6" />
        <span className="text-indigo-900 font-bold">
          Drag and drop files here
        </span>
        <span className="font-semibold">File Supported: Mp3, MP4</span>
        <Button name="Browse File" />
      </div>
    </div>
  );
}

export default BrowseFile;
