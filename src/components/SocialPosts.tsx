import "./SocialPosts.css"
import PostInList from "./PostInList";
import Post from "../models/Post";
import {useState} from "react";

function SocialPosts() {
    const [posts, setPosts] = useState<Post[]>([
            {
                thought:"Fish dog",
                title:"Strange thing",
            },
            {
                title:"Garble",
                thought:"Snarf dog",
            }
            ])
    return (
        <div className="SocialPosts">
            <h1 className="ThoughtsHeader">My Thoughts</h1>
                <button className="NewThoughtButton">New Thought</button>
                <div className="Thoughts">
                    <ul>
                        {posts.map((post)=><PostInList key={post.title} post={post}/>)}
                    </ul>
                </div>
        </div>
    )
}

export default SocialPosts
