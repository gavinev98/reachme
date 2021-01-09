import React, { useState, useContext } from 'react';
import "./style.css";
import { Comment, CommentInput } from '../../components/index';
import { storage, db } from '../../firebase';
import { UserContext } from '../../contexts/user';



//as we want to retrieve all posts we will do this via props and not context.
const Index = ({profileURL, username, id, photoURL, caption, comments}) => {
   //getting user context to see if user is logged in.
   const [user, setUser] = useContext(UserContext).user;

   
    //creating a delete postHandler to remove a post.
    const deletePostHandler = () => {     
        //delete post from firebase storage.
        //first we delete image from firebase storage. so we get reference
        var imageRef = storage.refFromURL(photoURL);

        //delete image.
        imageRef.delete().then(function() {
            console.log("image sucessfully deleted");
        }).catch((error) => {
            console.log(error);
        });

        //deleting of the actual post document.
        db.collection("posts").doc(id).delete().then(() => {
            console.log("post sucessfully deleted")
        }).catch((error) => {
            console.log("Error deleting post" + error);
        })

    }
  
    //let the comment section equal a blank div.
    let commentSection = <></>

    //if the user is logged in then display comments section
     if(user !== null) {
         commentSection = (
            <CommentInput id={id} comments={comments}/>
         );
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
                {user ? (<button className="customBtn" onClick={deletePostHandler}>Delete</button>) : <></>}
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
            {commentSection}
            

            {comments ? comments.map((singleComment) => 
                <Comment  username={singleComment.username} caption={singleComment.comment} />) 
                : <></>} 


        </div>
    );
};

export default Index;