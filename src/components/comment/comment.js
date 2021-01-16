import React, { useState } from 'react';
import "./style.css";
import CloseIcon from '@material-ui/icons/Close';
import { db } from '../../firebase';


const Comment = ({username, caption, comments, commentID, postIdentifier}) => {


    //get comments section.
     //track of all comments already associated with post
     const [commentArray, setCCommentArray] = useState((comments ? comments : []));


    //removing a comment
    const removeComment = () => {

        //create a blank array to store updated comments.
        let updatedComments = [];

        //filter arrayt of comments without out one selected
           updatedComments = commentArray.filter(function(item) {
                return item.id !== commentID;
            });


            //update the database with updated comments for a specific post.
            db.collection("posts").doc(postIdentifier).update({
                comments: updatedComments
            }, (error) => {
                console.log(error);
            });
        
    }


    return (
        <div className="comment">
        <div className="commentCaption">
        <p> <span style={{fontWeight: "500", padding: "10px"}}>{username}</span>
            {caption}
           </p>
           </div>
           <CloseIcon className="close" onClick={removeComment} color="secondary" fontSize="large" /> 
        </div>
    );
};

export default Comment;