import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState("Random User")

const getUser = ()=>{
  fetch(url)
    // .then((response)=>response.json())
    .then((response)=>{
      if(response.status >= 200 && response.status <=299){
        return response.json();
      }
      else{
        setIsLoading(false)
        setIsError(true)
      }
      throw new Error("Link thik moto de beta!")
    })
    .then((user)=>{
      setIsLoading(false)
      setUser(user)
    })
    .catch((error)=>console.log(error))
}
  
  useEffect(()=>{
    getUser();
  },[])

  if(isLoading){
    return <h1>Loading....</h1>
  }
  if(isError){
    return <h1>Error...</h1>
  }
  
  return <h1>{user.name}</h1>
  

};

export default MultipleReturns;
