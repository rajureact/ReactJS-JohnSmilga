import React from 'react'

const Photo = ({user:{username}, user:{profile_image:{large:image}},user:{portfolio_url}, total_likes, urls:{regular}}) => {
  return (
    <article className="photo">
      <img src={regular} alt={username}/>
      <div className="photo-info">
        <div>
          <h4>{username}</h4>
          <p>{total_likes} likes</p>
        </div>
        <a href={portfolio_url? portfolio_url:"#"}><img src={image} className="user-img" alt={username}/></a>
      </div>
    </article>
  )
}

export default Photo
