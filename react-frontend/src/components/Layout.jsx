import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <article className="layout">
      <Toaster/>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
      {/* <UpdateUser /> */}
    </article>
  );
};

export default Layout;
