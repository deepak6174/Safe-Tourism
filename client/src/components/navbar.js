import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default props => {
  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand
          className="nav-brand"
          onClick={_ => {
            props.setPage(0);
          }}
        >
          <div style={{ color:"white" }}>
          Safe Tourism
          </div>
        </NavbarBrand>
      </Navbar>
    </div>
  );
};
