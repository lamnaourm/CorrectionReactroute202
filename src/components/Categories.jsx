import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
      return res.data;
    };

    getData().then((categories) => setCategories(categories));
  }, []);
  return (
    <div>
      <div className="list">
        {categories.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} />
            <h2>{item.name}</h2>
            <button onClick={() => navigate(`/categories/${item.id}`)}>
              Liste des produits
            </button>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
