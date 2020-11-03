import React, { useState, useEffect } from 'react';
import { data } from '../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const {id} = useParams();
  const value = data.find((value)=>{
    return value.id === parseInt(id);
  })
  const {name} = value;
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default Person;
