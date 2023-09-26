import React from 'react'
import { Form, Link, useLoaderData } from 'react-router-dom'

const Index = () => {
    const bookmarks = useLoaderData()
  return (
    <div>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', border:'2px solid grey'}}>
        <h2>Add a new Bookmark</h2>
        <Form action='/create' method='post' className='add-bookmark-form'>
            <input className='add-bookmark-input' type="text" name="title" placeholder="Website Name" />
            <input className='add-bookmark-input' type="text" name="url" placeholder="Website URL (please include https://)" />
            <input className='add-bookmark-btn' type="submit" value="add Bookmark"/>
        </Form>
        </div>
            <h3 style={{textAlign:'center', margin:'40px'}}>My Bookmarks:</h3>
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