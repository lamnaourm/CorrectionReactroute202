import React from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Home() {

  
  return (
    <div>
      <div className="header">
        <h1>ISMO SHOP</h1>
        <nav>
          <ul>
            <li>
              <NavLink end to="/">Acceuil</NavLink>
            </li>
            <li>
              <NavLink end to="Categories" className={({isActive}) => isActive? 'active':undefined}>Categories</NavLink>
            </li>
            <li>
              <NavLink end to="Produits" className={({isActive}) => isActive? 'active':undefined}>Produits</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </div>
  );
}
