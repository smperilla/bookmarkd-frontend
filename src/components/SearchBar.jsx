import React, { useRef } from 'react'

const SearchBar = (props) => {
    const formRef = useRef()
    const handleChange = (e)=>{
        e.preventDefault()
        let shownBookmarks=[]
        props.allBookmarks.map(b=>{
            let lowerB = b.title.toLowerCase()
            if (lowerB.includes(formRef.current[0].value.toLowerCase())){
                shownBookmarks.push(b)
            }
        })
        props.setBookmarks(shownBookmarks)
    }
  return (
    <div>
        <form ref={formRef} style={{textAlign:'center'}} onChange={handleChange}>
            <input className='add-bookmark-input' type="text" name='searchterm' placeholder='Search for a Bookmark'/>
        </form>
    </div>
  )
}

export default SearchBar