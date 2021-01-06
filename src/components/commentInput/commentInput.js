import React from 'react';
import "./style.css";

const commentInput = () => {
    return (
        <div className="commentInput">
            <textarea placeholder="Write a comment..." rows="1" className="commentInput_TextArea">

            </textarea>
            <button>Post</button>
        </div>
    );
};

export default commentInput;