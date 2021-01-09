import React from 'react';
import "./style.css";
import CloseIcon from '@material-ui/icons/Close';


const comment = ({username, caption}) => {
    return (
        <div className="comment">
        <div className="commentCaption">
        <p> <span style={{fontWeight: "500", padding: "10px"}}>{username}</span>
            {caption}
           </p>
           </div>
           <CloseIcon color="secondary" fontSize="large" /> 
        </div>
    );
};

export default comment;