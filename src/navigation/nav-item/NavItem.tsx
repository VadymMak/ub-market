import { FC } from "react";
import { NavLink } from "react-router-dom";

import { localization } from "../../constants/localization";

import styled from "./NavItem.module.scss";
import { useWindowSize } from "../../hooks/useWindowSize";

type TLink = {
  about: string;
  why: string;
  service: string;
  projects: string;
  contacts: string;
  language: string;
};

type TNavItemProps = {
  link: keyof TLink;
};

const NavItem: FC<TNavItemProps> = ({ link }) => {
  const { width } = useWindowSize();
  return (
    <NavLink
      className={width >= 1200 ? styled.desktop : styled["tablet-xl"]}
      to={link}
    >
      {localization.english[link].toUpperCase()}
    </NavLink>
  );
};

export default NavItem;
