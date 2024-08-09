import React from "react";
import SidebarCard from "./SidebarCard";

function Sidebar() {
  return (
    <div className="flex flex-col gap-6">
      <SidebarCard type="totla-minutes" />
      <SidebarCard type="shortcuts" />
    </div>
  );
}

export default Sidebar;
