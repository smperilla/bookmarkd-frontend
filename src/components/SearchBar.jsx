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
    const alphaClick = (e)=>{
        e.preventDefault()
        const bookmarksCopy = [...props.allBookmarks]
        const alphaBookmarks=bookmarksCopy.sort((a,b)=>
        a.title.localeCompare(b.title))
        props.setBookmarks(alphaBookmarks)
    }
    const chronoClick = (e)=>{
        e.preventDefault()
        const bookmarksCopy = [...props.allBookmarks]
        props.setBookmarks(bookmarksCopy)
    }
  return (
    <div>
        <form ref={formRef} style={{textAlign:'center'}} onChange={handleChange}>
            <input className='add-bookmark-input' type="text" name='searchterm' placeholder='Search for a Bookmark'/>
        </form>
        <div style={{display:'flex', justifyContent:'space-around', marginTop: '20px'}}>
            <form onSubmit={alphaClick}>
                <input className='add-bookmark-btn' type="submit" value="Alphabetical Order"/>
            </form>
            <form onSubmit={chronoClick}>
                <input className='add-bookmark-btn' type="submit" value="Chronological Order"/>
            </form>
        </div>
    </div>
  )
}

export default SearchBar