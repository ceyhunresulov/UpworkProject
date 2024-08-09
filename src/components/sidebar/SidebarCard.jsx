import React from "react";
import Button from "../buttons/Button";
import { MdFileCopy } from "react-icons/md";
import { FaFolder } from "react-icons/fa";

function SidebarCard({ type }) {
  return (
    <div className="p-6 rounded-2xl bg-white w-full ">
      {type === "totla-minutes" && (
        <div className="w-full flex flex-col items-center gap-y-8">
          <div className="w-full flex flex-row justify-between text-indigo-950 font-bold">
            <span>Total Minutes</span>
            <span>0/1200 mins</span>
          </div>
          <div className="w-full h-4 bg-gray-100">
            <div className="h-full w-2 bg-indigo-950"></div>
          </div>
          <div>
            <Button name="Go Unlimited" />
          </div>
        </div>
      )}

      {type === "shortcuts" && (
        <div className="w-full flex flex-col items-center gap-y-8">
          <div className="w-full ">
            <h4 className="text-indigo-950 font-bold mb-2">Shortcuts</h4>
            <div className="w-full p-2 bg-gray-100 rounded-md flex flex-row gap-2 items-center">
              <MdFileCopy />
              <span className="font-semibold text-black">Recent Files</span>
            </div>
          </div>

          <div className="w-full">
            <h4 className="text-indigo-950 font-bold mb-2 ">Folders</h4>
            <div className="w-full p-2 bg-gray-100 rounded-md flex flex-row gap-2 items-center">
              <FaFolder />
              <span className="font-semibold text-black">New Folder</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SidebarCard;
