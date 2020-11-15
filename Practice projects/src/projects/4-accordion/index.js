import React, { useState } from 'react';
import data from './data';
import './index.css';
import Question from './Question';

function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <React.Fragment>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((question)=>{
            return <Question {...question} key={question.id}/>
          })}
        </section>
      </div>
    </React.Fragment>
  )
}

export default App;
