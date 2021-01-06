import React, { useContext, useState } from 'react';
import "./style.css";
import { storage, db } from '../../firebase';
import { UserContext } from '../../contexts/user';

const CommentInput = ({id, comments}) => {

    //database call to add comment to post commented on.
    const [user, setUser] = useContext(UserContext).user;

    //hook to trackcomments.
    const [comment, setComment] = useState("");

    //track of all comments already associated with post
    const [commentArray, setCCommentArray] = useState((comments ? comments : []));

    //function to upload comment by user to post.
    const postCommentHandler = () => {

        //add to commentsArray
        if(comment != "") {
        commentArray.push({
            comment: comment,
            username: user.displayName
        })

        //add the comments back to the original collection.
        db.collection("posts").doc(id).update({
            comments : commentArray
        })
}

    }

    return (
        <div className="commentInput">
            <textarea placeholder="Write a comment..." rows="1" className="commentInput_TextArea" value={comment} onChange={(e) => setComment(e.target.value)}>

            </textarea>
            <button className="btnPost">Post</button>
        </div>
    );
};

export default CommentInput;