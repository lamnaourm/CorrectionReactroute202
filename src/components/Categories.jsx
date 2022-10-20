import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Categories() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://api.escuelajs.co/api/v1/categories')
      return res.data;
    }

    getData().then(categories => setCategories(categories));
  }, []);
  return (
    <div className='grid'>
    </div>
  )
}
