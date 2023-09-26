import React from 'react'
import { Form, Link, useLoaderData } from 'react-router-dom'

const Index = () => {
    const bookmarks = useLoaderData()
  return (
    <div>
        <h2>Add a new Bookmark</h2>
        <Form action='/create' method='post'>
            <input type="text" name="title" placeholder="Website Name" />
            <input type="text" name="url" placeholder="Website URL (please include https://)" />
            <input type="submit" value="add Bookmark"/>
        </Form>
        <div className='container'>
            {bookmarks.map(b=>(
                <div className='bookmark-item' key={b._id}>
                <Link to={`/${b._id}`} style={{textDecoration:'none', color:'black'}}>
                    <p style={{width:'100px'}}>{b.title}</p>
                </Link>
                <a target='_blank' style={{width:'100px'}} href={b.url}>{b.url}</a>
                <Link to={`/${b._id}/edit`}>
                <button>edit</button>
                </Link>
                <Form action={`delete/${b._id}`} method='post'>
                    <input type="submit" value='x'/>
                </Form>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Index