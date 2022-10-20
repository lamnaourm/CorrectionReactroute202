import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="header">
        <h1>ISMO SHOP</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Acceuil</NavLink>
            </li>
            <li>
              <NavLink to="Categories">Categories</NavLink>
            </li>
            <li>
              <NavLink to="Produits">Produits</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </div>
  );
}
