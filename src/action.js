import { redirect } from "react-router-dom"

const url = 'https://bookmarkd-backend-84y9.onrender.com'

export const createAction = async ({request})=>{
    const formData = await request.formData()
    const bookmark = {
        title: formData.get('title'),
        url: formData.get('url')
    }
    await fetch(url+'/bookmarks', {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bookmark)
    })
    return redirect('/')
}
export const updateAction = async ({params,request})=>{
    const formData = await request.formData()
    const bookmark = {
        title: formData.get('title'),
        url: formData.get('url')
    }
    await fetch(url+'/bookmarks/'+params.id, {
        method: 'put',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bookmark)
    })
    return redirect(`/${params.id}`)
}

export const deleteAction = async ({params})=>{
    await fetch(url+'/bookmarks/'+params.id, {
        method: 'delete',
        headers: {
            "Content-Type": "application/json"
        }
    }) 
    return redirect('/')
}