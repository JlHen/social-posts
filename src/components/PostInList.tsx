import './PostInList.css'
import Post from "../models/Post";

interface Props {
    signalDelete:(title:string)=>void
    post:Post
    upvotePost:(title:string)=>void
}

function PostInList({post, signalDelete, upvotePost}:Props) {
    return (
        <li className="ThoughtEntry">
            <div className="PostWords">
                <h2>{post.title}</h2>
                <p className="ThoughtSpan">{post.thought}</p>
            </div>
            <div className="PostActions">
                <button className="UpVoteButton" onClick={()=>upvotePost(post.title)}><i className="material-icons">thumb_up</i> </button>
                <p className="UpvoteDisplay">{post.upvoteCount}<span className="Heart">&hearts;</span></p>
                <button className="DeleteButton" onClick={()=>signalDelete(post.title)}><i className="material-icons">delete</i></button>
            </div>
        </li>
    )
}

export default PostInList
