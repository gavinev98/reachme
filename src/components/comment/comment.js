import React from 'react';
import "./style.css"


const comment = ({username, caption}) => {
    return (
        <div className="comment">
        <p> <span style={{fontWeight: "500", padding: "10px"}}>{username}</span>
            {caption}
           </p>
            
        </div>
    );
};

export default comment;