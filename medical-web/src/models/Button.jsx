import React from "react";

const Button = ({ title }) => {
  return (
    <button
      className="bg-backgroundColor text-white px-10 py-2 rounded-md hover:bg-hoverColor transition-all duration-300"
      type="submit"
    >
      {title}
    </button>
  );
};

export default Button; 