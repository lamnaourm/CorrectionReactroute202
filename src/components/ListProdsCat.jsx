import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ListProdsCat = () => {
  const { id } = useParams();

  const [produits, setProduits] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://api.escuelajs.co/api/v1/categories/${id}/products`
      );
      return res.data;
    };

    getData().then((prods) => setProduits(prods));
  }, []);

  return (
    <div>
      <h1>
        Liste des produits de la categorie{" "}
        {produits.length != 0 && produits[0].category.name}
      </h1>

      <div className="list">
        {produits.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.images[0]} />
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProdsCat;
