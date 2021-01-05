import React, { useState, useContext } from 'react';
import "./style.css";
import { Comment } from '../../components/index';


//as we want to retrieve all posts we will do this via props and not context.
const Index = ({profileURL, username, id, photoURL, caption, comments}) => {

  

    return (
        <div className="postContainer">
            <div className="postHeader" >
            <div className="postHeaderLeft">
              <img className="postHeaderImage" src={profileURL} />
              <div class="postUsername">
              <p className="customBtn">{username}</p>
              </div>
              </div>
              <button className="customBtn">Delete</button>
            </div>

            <div className="postCenter">
             <img className="postImage" src={photoURL} />

            </div>

            <div className="postCaption">
           <p> <span style={{fontWeight: "500", padding: "10px"}}>{username}</span>
            {caption}
           </p>
            </div>

            {comments ? comments.map((singleComment) => 
                <Comment username={singleComment.username} caption={singleComment.caption} />) 
                : <></>} 


        </div>
    );
};

export default Index;