import './PostForm.css'
import Post from "../models/Post"
import {FormEvent, useState} from "react";

interface Props {
    existingPosts:Post[]
    addNewPost: (post:Post)=>void
    closeForm: ()=>void
}

function NewThoughtModal({existingPosts, addNewPost, closeForm}:Props) {
    const [title, setTitle] = useState("")
    const [thought, setThought] = useState("")
    const [invalidTitle, setInvalidTitle] = useState(false)
    function handleSubmit(submitEvent: FormEvent) {
        submitEvent.preventDefault()
        for ( let i = 0; i < existingPosts.length; i++ ){
            if (existingPosts[i].title === title) {
                setInvalidTitle(true)
                return
            }
        }
        let newPost:Post = {title:title, thought:thought, upvoteCount:0}
        addNewPost(newPost)
        closeForm()
    }
    return (
        <div className="NewPost">
            <form className="NewThoughtForm" onSubmit={(submitEvent)=>handleSubmit(submitEvent)}>
                {invalidTitle && <p>Title already used! Titles must be unique!</p>}
                <button className="CancelButton" onClick={closeForm}><i className="material-icons">cancel</i></button>
                <div className="TitleInput">
                    <label className="FormLabel" htmlFor="title">Title</label>
                    <input className="TitleField" required type="text" name="title" id="title" value={title} onChange={(event)=>setTitle(event.target.value)}/>
                </div>
                <div className="ThoughtInput">
                    <label className="FormLabel" htmlFor="thought">Thought</label>
                    <textarea className="ThoughtField" required name="thought" id="thought" value={thought} onChange={(event)=>setThought(event.target.value)}/>
                </div>
                <button className="PostButton">Add Post</button>
            </form>
        </div>
    )
}

export default NewThoughtModal
