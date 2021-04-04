import React from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

function NavList(props) {

  return (
    <>
      {props.navItems.map((eachNavItem) => {
        return (
          <li key={eachNavItem.id} className="nav-item dropdown">
            {eachNavItem.navList.length > 0 ?
              <Link
                to={eachNavItem.url}
                className="nav-link text-nowrap"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={props.sticky ? props.styles : null}
              >
                {eachNavItem.tabTitle}
                {/* display icon only when dropdown is present */}
                <i className="small caret down icon"></i>
              </Link>
              :
              <Link className="nav-link" aria-current="page" to={eachNavItem.url}>{eachNavItem.tabTitle}</Link>}


            {/* display only when dropdown menu is present */}
            {eachNavItem.navList.length > 0 && <ul
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              {eachNavItem.navList.map((eachItem) => (
                <NavItem
                  eachItem={eachItem}
                  key={eachItem.id}
                  linkTitle={eachItem.linkTitle}
                  link={eachItem.link}
                />
              ))}
            </ul>}

          </li>
        );
      })}
    </>
  );
}

export default NavList;
