import React from "react";
import { Link } from "react-router-dom";
import "./CardMenu.css"

const CardMenu = ({ img, title, desc}) => {
  return (
    <div className="menu-card">
      <img src={img} alt="greek salad" />
      <p className="salad-title">{title}</p>
      <p className="salad-description">
        {desc}
      </p>
      <Link to='/menu' >Order delivery</Link>
    </div>
  );
};

export default CardMenu;
