import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Show = () => {
    const bookmark = useLoaderData()
  return (
    <div>
        <div style={{
            textAlign:'center',
            border: '2px solid grey',
            backgroundColor: 'white',
            margin: '30px'
        }}>
        <h2>{bookmark.title}</h2>
        <h2><a href={bookmark.url} target='_blank'>{bookmark.url}</a></h2>
        </div>
        <Link to={'/'}>Back Home</Link>
    </div>
  )
}

export default Show