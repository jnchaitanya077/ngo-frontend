import React from "react";
import { Link } from "react-router-dom";

function NavItem({ eachItem }) {
  return (
    <li className="nav-item">
      <Link
        className="nav-link text-nowrap"
        to={eachItem.link}
      >
        {eachItem.linkTitle}
      </Link>
    </li>
  );
}

export default NavItem;
