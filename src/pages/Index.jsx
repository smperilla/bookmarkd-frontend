import React, { useState } from 'react'
import { Form, Link, useLoaderData } from 'react-router-dom'
import Newbookmark from '../components/Newbookmark'
import SearchBar from '../components/SearchBar'

const Index = () => {
    const allBookmarks = useLoaderData()
    const [bookmarks, setBookmarks] = useState(allBookmarks)
  return (
    <div>
        <Newbookmark></Newbookmark>
            <h3 style={{textAlign:'center', margin:'40px'}}>My Bookmarks:</h3>
            <SearchBar allBookmarks={allBookmarks} setBookmarks={setBookmarks}></SearchBar>
        <div className='container'>
            {bookmarks.map(b=>(
                <div className='bookmark-item' key={b._id}>
                <Link to={`/${b._id}`} style={{textDecoration:'none', color:'black'}}>
                    <p style={{width:'100px'}}>{b.title}</p>
                </Link>
                <a target='_blank' style={{width:'100px'}} href={b.url} className='bookmark-link'>{b.url}</a>
                <Link to={`/${b._id}/edit`}>
                <button>edit</button>
                </Link>
                <Form action={`delete/${b._id}`} method='post'>
                    <input type="submit" value='x' className='delete-btn'/>
                </Form>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Index