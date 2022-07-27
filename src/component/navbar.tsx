import React, { FC } from "react";

const Navbar: FC<{ ToggleSidebar: any; isOpen: any }> = ({ ToggleSidebar, isOpen }) => {
  return (
    <>
      <nav
        className="navbar"
        style={{
          marginLeft: `${isOpen === true ? "280px" : ""}`,
          transition: "all 0.5s ease-in-out",
        }}
      >
        <div className="container-fluid p-2">
          {/* <a className="navbar-brand text-primary mr-0" href="/">
            Company Logo
          </a> */}
          <div className="form-inline ml-auto">
            <div className="btn btn-primary" onClick={ToggleSidebar}>
              <i className="fa fa-bars"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
