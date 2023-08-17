import React from "react";

const NavBar = ({ title }) => {
  return (
    <div className="navbar bg-base-100">
      <a className="btn btn-ghost normal-case text-xl">{title}</a>
    </div>
  );
};

export default NavBar;
