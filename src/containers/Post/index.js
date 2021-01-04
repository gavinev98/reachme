import React, { useState, useContext } from 'react';



const Index = ({profileURL, username, id, photoURL, caption, comments}) => {

  

    return (
        <div className="postContainer">
            <div className="postHeader" >
              <img src={profileURL} />
              <p>{username}</p>
            </div>
        </div>
    );
};

export default Index;