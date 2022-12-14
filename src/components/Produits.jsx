import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Produits() {

  const [produits, setProduits] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://api.escuelajs.co/api/v1/products')
      return res.data;
    }

    getData().then(prods => setProduits(prods));
  }, []);

  return (
    <div className='list'>
        {produits.map(item => <div className='card' key={item.id}>
            <img src={item.images[0]}/>
            <h2>{item.title}</h2>
            <button onClick={() => navigate(`/produits/${item.id}`)}>Details produit</button>
          </div>)}
    </div>
  )
}
