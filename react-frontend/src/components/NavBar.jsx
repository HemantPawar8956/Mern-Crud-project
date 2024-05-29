import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <article className="NavBarMain">
      <section className="NavBar">
        <div className="NavBarLogo">Logo</div>
        <div className="NavBarLinks">
          <Link to={"/"}>All Users</Link>
          <Link to={"/createUser"}>Create User</Link>
        </div>
      </section>
    </article>
  );
};

export default NavBar;
