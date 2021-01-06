import React, { useState, useContext } from 'react';
import "./style.css";
import { Comment } from '../../components/index';
import { storage } from '../../firebase';


//as we want to retrieve all posts we will do this via props and not context.
const Index = ({profileURL, username, id, photoURL, caption, comments}) => {


    //creating a delete postHandler to remove a post.
    const deletePostHandler = (id) => {
        
        //delete post from firebase storage.
        //first we delete image from firebase storage. so we get reference
        var imageRef = storage.refFromURL(photoURL);

        //delete image.
        imageRef.delete().then(function() {
            console.log("image sucessfully deleted");
        }).catch((error) => {
            console.log(error);
        })

    }
  

    return (
        <div className="postContainer">
            <div className="postHeader" >
            <div className="postHeaderLeft">
              <img className="postHeaderImage" src={profileURL} />
              <div class="postUsername">
              <p className="customBtn">{username}</p>
              </div>
              </div>
              <button className="customBtn" onClick={deletePostHandler}>Delete</button>
            </div>

            <div className="postCenter">
             <img className="postImage" src={photoURL} />

            </div>

            <div className="postCaption">
                 
           <p> <span style={{fontWeight: "500", padding: "10px"}}>{username}</span>
            {caption}
           </p>
            </div>
            <p className="commentsCaption"> Comments </p>



            {comments ? comments.map((singleComment) => 
                <Comment  username={singleComment.username} caption={singleComment.comment} />) 
                : <></>} 


        </div>
    );
};

export default Index;