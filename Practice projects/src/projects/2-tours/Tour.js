import React, { useState } from 'react'

export default function Tour({id, name, info, image, price, removeItem}) {
    const [details, setDetails] = useState(info.substring(0,200))
    return (
        <React.Fragment>
            <div className="container card">
                <img src={image} alt=""/>
                <div className="details">
                    <div className="namePrice">
                        <h3>{name}</h3>
                        <h3 className="price">${price}</h3>
                    </div>
                    <p>{details}...{" "}
                        {details.length <= 200?
                            <button className="read" onClick={()=>setDetails(info)}>Read More</button>:
                            <button className="read" onClick={()=>setDetails(info.substring(0,200))}>Read Less</button>
                        }
                    </p>
                    <div className="button">
                        <button className="btn" onClick={()=>removeItem(id)}>Not Interested</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
