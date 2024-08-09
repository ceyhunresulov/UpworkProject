import React from "react";

function Button({ name }) {
  return (
    <button className="bg-gradient-to-r from-indigo-950 via-indigo-700 to-indigo-500 text-white px-6 py-1 rounded-md">
      {name}
    </button>
  );
}

export default Button;
