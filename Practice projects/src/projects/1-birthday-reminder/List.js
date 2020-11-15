import React from 'react'

export default function List({id, name, age, image}) {
    return (
        <div className="profile">
            <img src={image} alt=""/>
            <div className="item">
                <h1>{name}</h1>
                <p>{age} Years</p>
            </div>
        </div>
    )
}
