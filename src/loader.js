const url = 'https://bookmarkd-backend-84y9.onrender.com'

export const bookmarksLoader = async ()=>{
    const res = await fetch(url+'/bookmarks')
    const bookmarks = await res.json()
    return bookmarks
}
export const showLoader = async ({params})=>{
    const res = await fetch(url+'/bookmarks/'+params.id)
    const bookmark = await res.json()
    return bookmark
}