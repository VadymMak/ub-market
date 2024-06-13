import NavItems from "../nav-items/NavItems";

import styled from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styled.header}>
      <NavItems />
    </header>
  );
};

export default Header;
