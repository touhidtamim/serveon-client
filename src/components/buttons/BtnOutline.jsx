import React from "react";
import { useNavigate } from "react-router-dom";

const BtnOutline = ({ text, to, className = "" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => to && navigate(to)}
      className={`
        border border-sky-600
        text-sky-600 font-semibold
        px-5 py-2 cursor-pointer
        rounded-4xl
        hover:bg-sky-600 hover:text-white
        transition-all duration-200 ease-in-out
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default BtnOutline;
