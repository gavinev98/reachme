import React, { useState } from 'react';
import "./style.css";
import CloseIcon from '@material-ui/icons/Close';


const Comment = ({username, caption, postID, comments}) => {


    //get comments section.
     //track of all comments already associated with post
     const [commentArray, setCCommentArray] = useState((comments ? comments : []));



    //removing a comment
    const removeComment = () => {

        //displayy log of comments array
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