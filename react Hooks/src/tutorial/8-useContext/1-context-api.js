import React, { useState, useContext } from 'react';
import { data } from '../../data';
// more components
// fix - context api, redux (for more complex cases)

const FirstContextUse = React.createContext();

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <FirstContextUse.Provider value={{removePerson, people}}>
      <h3>prop drilling</h3>
      <List />
    </FirstContextUse.Provider>
  );
};

const List = () => {
  const {people} = useContext(FirstContextUse)
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson key={person.id} {...person} />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {

  const {removePerson} = useContext(FirstContextUse)

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
