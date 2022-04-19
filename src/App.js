import React, { useState } from 'react'
import './App.css';
import Data from './data'
import People from './People';

function App() {
  const [data, setData] = useState(Data)
  console.log("data", data)


  return (
    <>
    <main>
      <div className="card">
      <h2 className="heading">{data.length} Birthdays Today</h2>
      <People people={data}/>
      <button className="button" onClick={(e) => {setData([])}}>Clear</button>
      </div>
      </main>
    </>
  )
}

export default App
