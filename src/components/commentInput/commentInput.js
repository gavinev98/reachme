import React from 'react';
import "./style.css";
import { storage, db } from '../../firebase';

const commentInput = ({id}) => {

    //database call to add comment to post commented on.
    const [user, setUser] = useContext(UserContext).user;

    //function to upload comment by user
    const postCommentHandler = () => {

    }

    return (
        <div className="commentInput">
            <textarea placeholder="Write a comment..." rows="1" className="commentInput_TextArea">

            </textarea>
            <button className="btnPost">Post</button>
        </div>
    );
};

export default commentInput;