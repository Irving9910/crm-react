import React from "react";

const Alert = ({children}) => {
  return (
    <div className="text-red-500 font-bold p-1 first-letter:uppercase text-sm">
      {children}
    </div>
  );
};

export default Alert;
