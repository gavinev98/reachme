import React, { useState, useContext } from 'react';
import "./style.css";


//as we want to retrieve all posts we will do this via props and not context.
const Index = ({profileURL, username, id, photoURL, caption, comments}) => {

  

    return (
        <div className="postContainer">
            <div className="postHeader" >
            <div className="postHeaderLeft">
              <img className="postHeaderImage" src={profileURL} />
              <p>{username}</p>
              </div>
              <button>Delete</button>
            </div>
        </div>
    );
};

export default Index;