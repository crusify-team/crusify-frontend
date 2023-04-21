import React, { useState } from "react";
import Link from "next/link";
import Menu from "./Menu";

const Header = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    console.log("Menu button clicked");
    setActive(!active);
  };

  return (
    <header>
      <div id="logo">
        <Link href="/">
          <img src="/img/logo/logo.png" alt="" />
        </Link>
      </div>
      <div
        id="menu-button"
        className={active ? "active" : ""}
        onClick={handleClick}
      >
        <span></span>
        <span></span>
      </div>
      <Menu active={active} />
    </header>
  );
};

export default Header;
