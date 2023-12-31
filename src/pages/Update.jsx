import React, { useState } from 'react'
import { Form, Link, useLoaderData } from 'react-router-dom'

const Update = () => {
    const bookmark = useLoaderData()
    const [formData, setFormData] = useState(bookmark)
    const handleChange = (e)=>{
        setFormData(prevState=>{
            return {...prevState, [e.target.name] : e.target.value}
        })
    }
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h2>Editing {bookmark.title} Bookmark</h2>
        <Form action={`/update/${bookmark._id}`} method='post' className='add-bookmark-form'>
            <input className='add-bookmark-input' onChange={handleChange} type="text" name="title" placeholder="Website Name" value={formData.title}/>
            <input className='add-bookmark-input' onChange={handleChange} type="text" name="url" placeholder="Website URL (please include https://)" value={formData.url}/>
            <input className='add-bookmark-btn' type="submit" value={`Update ${bookmark.title} Bookmark`}/>
        </Form>
        <Link to={'/'}>Back Home</Link>
    </div>
  )
}

export default Update