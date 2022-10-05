import './PostInList.css'
import Post from "../models/Post";

interface Props {
    post:Post
}

function PostInList({post}:Props) {
    return (
        <li className="Thought">
            <h2>{post.title}</h2>
            <span>{post.thought}</span>
        </li>
    )
}

export default PostInList
