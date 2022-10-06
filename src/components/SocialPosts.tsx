import "./SocialPosts.css"
import PostInList from "./PostInList";
import Post from "../models/Post";
import {useState} from "react";
import NewThoughtModal from "./PostForm";

function SocialPosts() {
    const defaultPost:Post = {
        title: "Add a new thought!",
        thought: "Click the 'New Thought' button to add a new thought! Titles must be unique!",
        upvoteCount: 0,
    }
    const [posts, setPosts] = useState<Post[]>([defaultPost])
    const [showNewThoughtForm, setShowNewThoughtForm] = useState(false)
    function deletePost(title:string) {
        let newPosts:Post[] = []
        posts.forEach((post)=>{
            if (post.title !== title) {
                newPosts.push(post)
            }
        })
        if (newPosts.length === 0){
            newPosts.push(defaultPost)
        }
        setPosts(newPosts)
    }
    function addPost(newPost:Post) {
        let newPosts:Post[] = [newPost]
        posts.forEach((post)=>{
            if(post.title === newPost.title){
                return
            }
            newPosts.push(post)
        })
        setPosts(newPosts)
    }
    function upvotePost(title:string) {
        let newPosts:Post[] = []
        posts.forEach((post)=>{
            if (post.title === title) {
                post.upvoteCount++
            }
            newPosts.push(post)
        })
        setPosts(newPosts)
    }
    function hideForm() {
        setShowNewThoughtForm(false)
    }
    return (
        <div className="SocialPosts">
            <h1 className="ThoughtsHeader">My Thoughts</h1>
                <button className="NewThoughtButton" onClick={()=>setShowNewThoughtForm(true)}>New Thought</button>
                { showNewThoughtForm && <NewThoughtModal existingPosts={posts} addNewPost={addPost} closeForm={hideForm}/>}
                <div className="Thoughts">
                    <ul>
                        {posts.map((post)=><PostInList key={post.title} post={post} signalDelete={deletePost} upvotePost={upvotePost}/>)}
                    </ul>
                </div>
        </div>
    )
}

export default SocialPosts
