import { useEffect, useState } from 'react'
import './stateful.css'
function Posts() {

    let [getPosts, setGetPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(fetchedPosts => {
                setGetPosts(fetchedPosts)
            })
    })

    const [userId, setUserId] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    let onFormSubmission = (e) => {
        e.preventDefault()
        var data = {userId: userId, title: title, body: body}
        fetch('https://jsonplaceholder.typicode.com/posts', {method: 'post', body: data})
        .then(res => res.json)
        .then(success => {
            console.log("Requested accepted..")
        })
        .catch(err => {
            console.log("Request denied..")
        })
    }
    return <>
        <form onSubmit={onFormSubmission}><br />
        <h1>24) What's on your mind?</h1>
            <label>
                User id:<br />
            <input type='number' className="btn" required onChange={(e)=> {setUserId(e.target.value)}} /><br />
            </label>
            <label>
                Title:<br />
            <input type='text'  required className="btn" onChange={(e)=> {setTitle(e.target.value)}} /><br />
            </label>
            <label>
                Body:<br />
            <input type='text'  required className="btn" onChange={(e)=> {setBody(e.target.value)}} /><br />
            </label>
        <button type="submit" className="btn">Post</button>
        </form>
        <h1>23) Posts fetching</h1>
        {getPosts.map(data => <span key={data.id}>
            <h2>User {data.userId}</h2>
            <h3>{data.title}</h3>
            <p>{data.body}</p> </span>
        )}
    </>
}

export default Posts;