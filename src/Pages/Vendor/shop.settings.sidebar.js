import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const Background = styled.div`
  background-color: #faf9f4;
  position: fixed;
  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.25);
`;

const navLinkChild = ({ isActive, childText }) => {
  return (
    <div
      style={
        isActive
          ? {
              backgroundColor: "#BEAD7C",
              marginBottom: "1px",
              padding: "4px",
              borderRadius: "5px",
            }
          : { marginBottom: "1px", padding: "3px" }
      }
    >
      {childText}
    </div>
  );
};

const Sidebar = () => {
  return (
    <Background className="w-25 h-100">
      <div className="p-3">
        <h5>Store</h5>
        <NavLink
          style={{ textDecoration: "none" }}
          to="/my_shop/general"
          children={({ isActive }) =>
            navLinkChild({ isActive, childText: "General" })
          }
        />
      </div>
      <div className="p-3">
        <h5>Products</h5>
        <NavLink
          style={{ textDecoration: "none" }}
          to="/"
          children={({ isActive }) =>
            navLinkChild({ isActive, childText: "General" })
          }
        />
        <NavLink
          style={{ textDecoration: "none" }}
          to="/"
          children={({ isActive }) =>
            navLinkChild({ isActive, childText: "General" })
          }
        />

        <NavLink
          style={{ textDecoration: "none" }}
          to="/"
          children={({ isActive }) =>
            navLinkChild({ isActive, childText: "General" })
          }
        />
      </div>
      <div className="p-3">
        <h5>Payment</h5>
        <NavLink
          style={{ textDecoration: "none" }}
          to="/"
          children={({ isActive }) =>
            navLinkChild({ isActive, childText: "General" })
          }
        />
        <NavLink
          style={{ textDecoration: "none" }}
          to="/"
          children={({ isActive }) =>
            navLinkChild({ isActive, childText: "General" })
          }
        />
      </div>
    </Background>
  );
};

export default Sidebar;
