import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Tour from './Tour';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);
  const data = async()=>{
    const response = await fetch(url);
    const users = await response.json();
    setPeople(users)
    setLoading(false)
  }

  useEffect(() => {
    data()
  },[])

  const removeItem = (id)=>{
    const newPeople = people.filter((people) => people.id !== id)
    setPeople(newPeople);
  }

  if(loading){
    return <Loading />
  }

  return (
    <React.Fragment>
      <div className="container">
        <h1 className="heading">Our Tours</h1>
        <div className="underline"></div>
        {people.length===0?<button className="btn" onClick={()=>data()}>Refresh</button>: ""}
      </div>
      {people.map((person)=>{
        return <Tour {...person} key={person.id} removeItem={removeItem}/>
      })}
    </React.Fragment>
  );
}

export default App;
