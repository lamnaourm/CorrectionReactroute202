import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailsProduit = () => {
  const [produit, setProduit] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      return res.data;
    };

    getData().then((produit) => setProduit(produit));
  }, []);

  return (
    <div>
      {produit && (
        <table>
          <tr>
            <td>Nom de produit : </td>
            <td>{produit.title}</td>
          </tr>
          <tr>
            <td>Description : </td>
            <td>{produit.description}</td>
          </tr>
          <tr>
            <td>Prix : </td>
            <td>{produit.price}</td>
          </tr>
          <tr>
            <td>Categorie : </td>
            <td>{produit.category.name}</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <img src={produit.images[0]} />
              <img src={produit.images[1]} />
              <img src={produit.images[2]} />
            </td>
          </tr>
        </table>
      )}
    </div>
  );
};

export default DetailsProduit;
