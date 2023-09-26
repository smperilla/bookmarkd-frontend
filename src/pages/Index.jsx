import React from 'react'
import { Form, Link, useLoaderData } from 'react-router-dom'

const Index = () => {
    const bookmarks = useLoaderData()
  return (
    <div>
        <h2>Add a new Bookmark</h2>
        <Form></Form>
        <div className='container'>
            {bookmarks.map(b=>(
                <div className='bookmark-item' key={b._id}>
                    <Link to={`/${b._id}`} style={{textDecoration:'none', color:'black'}}>
                <p style={{width:'100px'}}>{b.title}</p>
                </Link>
                <a target='_blank' style={{width:'100px'}} href={b.url}>{b.url}</a>
                <button>edit</button>
                <button>x</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Index