import List from './List';
import data from './data'
import './index.css'
import React, { useState } from 'react';

function App() {
  const [people, setPeople] = useState(data);
  
    return (
    <React.Fragment>
      <div>
        <div className="container">
          <h1 className="headline">{people? people.length: 0} Birthday</h1>
          {people.map((item)=>{
            return <List key={item.id} {...item}/>
          })}
          <div className="button">
            <button onClick={()=>setPeople([])} className="btn">Clear All</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
