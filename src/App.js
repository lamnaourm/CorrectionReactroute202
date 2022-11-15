import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Categories from "./components/Categories";
import Home from "./components/Home";
import ListProdsCat from "./components/ListProdsCat";
import Produits from "./components/Produits";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="categories" >
              <Route index element={<Categories />} />
              <Route path=":id" element={<ListProdsCat />} />
          </Route>
          <Route path="produits" element={<Produits />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
