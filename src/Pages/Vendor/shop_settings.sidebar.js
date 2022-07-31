import React from "react";
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
          to="general"
          children={({ isActive }) =>
            navLinkChild({ isActive, childText: "General" })
          }
        />
      </div>
      <div className="p-3">
        <h5>Products</h5>
        <NavLink
          style={{ textDecoration: "none" }}
          to="products"
          children={({ isActive }) =>
            navLinkChild({ isActive, childText: "My Products" })
          }
        />
        <NavLink
          style={{ textDecoration: "none" }}
          to="create_products"
          children={({ isActive }) =>
            navLinkChild({ isActive, childText: "Create Products" })
          }
        />
      </div>
      <div className="p-3">
        <h5>Orders</h5>
        <NavLink
          style={{ textDecoration: "none" }}
          to="my_orders"
          children={({ isActive }) =>
            navLinkChild({ isActive, childText: "Current Orders" })
          }
        />
        <NavLink
          style={{ textDecoration: "none" }}
          to="my_completed_orders"
          children={({ isActive }) =>
            navLinkChild({ isActive, childText: "Completed Orders" })
          }
        />
      </div>
    </Background>
  );
};

export default Sidebar;
