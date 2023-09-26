import React from 'react'
import { Form } from 'react-router-dom'

const Newbookmark = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', border:'2px solid grey'}}>
        <h2>Add a new Bookmark</h2>
        <Form action='/create' method='post' className='add-bookmark-form'>
            <input className='add-bookmark-input' type="text" name="title" placeholder="Website Name" />
            <input className='add-bookmark-input' type="text" name="url" placeholder="Website URL (please include https://)" />
            <input className='add-bookmark-btn' type="submit" value="add Bookmark"/>
        </Form>
        </div>
  )
}

export default Newbookmark