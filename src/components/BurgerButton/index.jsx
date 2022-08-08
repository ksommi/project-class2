import React from "react";
import "./style.css";

const BurgerButton = ({ open, setOpen }) => {
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`${"menu-btn burger-position"} ${open === true ? "open" : ""}`}
      onClick={handleClick}
    >
      <div className="menu-btn__burger"></div>
    </div>
  );
};

export default BurgerButton;
