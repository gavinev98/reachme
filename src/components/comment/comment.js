import React from 'react';
import "./style.css";
import CloseIcon from '@material-ui/icons/Close';


const comment = ({username, caption, id}) => {

    //removing a comment
    const removeComment = () => {

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

export default comment;