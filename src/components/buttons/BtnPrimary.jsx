import React from "react";
import { useNavigate } from "react-router-dom";

const BtnPrimary = ({ text, to, className = "" }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) navigate(to);
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-linear-to-r from-sky-500 to-sky-800 hover:from-sky-600 hover:to-sky-900 cursor-pointer text-white font-semibold py-2 px-4 rounded-4xl transition duration-200 ${className}`}
    >
      {text}
    </button>
  );
};

export default BtnPrimary;
