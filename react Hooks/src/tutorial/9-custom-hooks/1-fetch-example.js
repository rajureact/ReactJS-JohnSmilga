import React, { useState, useEffect } from 'react';
import { useFetch } from './2-useFetch';
const url = 'https://course-api.netlify.app/api/javascript-store-products';
const Example = () => {
  const {products, loading} = useFetch(url);
  console.log(products);
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
      {products.map(()=>{
        return <h1>Hi</h1>
      })}
    </div>
  );
};

export default Example;
