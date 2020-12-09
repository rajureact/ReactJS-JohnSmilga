import React, { useState, useEffect } from 'react'
import './index.css';
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
const clientID = `?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`
const axios = require('axios');

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [query, setQuery] = useState('')

  async function getImages() {
    setLoading(true)
      let url
      const urlPage = `&page=${page}`
      const urlQuery = `&query=${query}`
      if (query) {
        url = `${searchUrl}${clientID}${urlPage}${urlQuery}`
      } else {
        url = `${mainUrl}${clientID}${urlPage}`
      }

    try {
      // const response = await fetch(url)
      // const data = await response.json()
      const response = await axios.get(url);
      // console.log(response);

      setImages((oldImages) => {
        if (query && page === 1) {
          return response.data.results
        } else if (query) {
          return [...oldImages, ...response.data.results]
        } else {
          return [...oldImages, ...response.data]
        }
      })
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    getImages();
  },[page])
  useEffect(() => {
  const event = window.addEventListener('scroll', () => {
    let height = window.innerHeight;
    let scroll = window.scrollY;
    let bodyHeight = document.body.scrollHeight;
    if ((!loading && height + scroll) >= bodyHeight - 2) {
      setPage((oldPage) => {
        return oldPage + 1
      })
    }
  })
  return () => window.removeEventListener('scroll', event)
  }, [])
const handleSubmit = (e) => {
    e.preventDefault()
    setPage(1)
  }
  return (
    <React.Fragment>
      <main>
        <section className="search">
          <form className="search-form">
            <input type="text" placeholder="search" className="form-input" value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button type="submit" className="submit-btn" onClick={handleSubmit}><FaSearch /></button>
          </form>
        </section>
        <section className="photos">
          <div className="photos-center">
            {images.map((item,index)=>{
              return <Photo key={index} {...item}/>
            })}
          </div>
          {loading && <h2 className='loading'>Loading...</h2>}
        </section>
      </main>
    </React.Fragment>
  )
}

export default App
