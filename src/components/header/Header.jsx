import React from "react";
import { MdPerson } from "react-icons/md";

function Header() {
  return (
    <header className="px-6 py-5 bg-indigo-950 text-white rounded-xl">
      <nav className="flex flex-row justify-between">
        <div className="flex flex-row gap-8">
          <h1>Voice Transcribe</h1>
          <h4>Pricing</h4>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <MdPerson className="size-6"/>
          <span>My account</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
