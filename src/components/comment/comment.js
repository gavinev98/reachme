import React, { useState } from 'react';
import "./style.css";
import CloseIcon from '@material-ui/icons/Close';


const Comment = ({username, caption, comments, commentID}) => {


    //get comments section.
     //track of all comments already associated with post
     const [commentArray, setCCommentArray] = useState((comments ? comments : []));

        

    //removing a comment
    const removeComment = () => {

        //create a blank array 
        let updatedComments = [];

        //filter arrayt of comments without out one selected
           updatedComments = commentArray.filter(function(item) {
                return item.id !== commentID;
            });

   
        console.log(updatedComments);
        console.log(commentArray);
        


    }


    return (
        <div className="comment">
        <div className="commentCaption">
        <p> <span style={{fontWeight: "500", padding: "10px"}}>{username}</span>
            {caption}
           </p>
           </div>
           <CloseIcon onClick={removeComment} color="secondary" fontSize="large" /> 
        </div>
    );
};

export default Comment;