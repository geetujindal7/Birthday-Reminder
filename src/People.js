import React from 'react'

function People(props) {
    
  return (
    <div>
    {props.people.map((e) => {
        return(
            <>
            <div className="person">
            <img className="image" src={e.image} alt="img"/>
            <div>
                <h4 className="name">{e.name}</h4>
                <p className="age">{e.age} years</p>
              
            </div>
            </div>
            </>
        )
    })}
    </div>
  )
}

export default People
