/** 1800 max-width, 1024 px ipad, 500 iphone */

import { routes } from "../../constants/routes";

import NavItem from "../nav-item/NavItem";

import styled from "./NavItems.module.scss";

import logo from "../../assets/UB Market 01_.png";

const NavItems = () => {
  return (
    <nav className={styled.nav}>
      <div>
        <img src={logo} alt="logo" />
      </div>

      <ul>
        {routes.map((route) => (
          <li key={route.id}>
            <NavItem link={route.link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavItems;
