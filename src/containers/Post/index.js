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
  
    //let the comment input equal a blank div.
    let commentSection = <></>;

    //if the user is logged in then display comments section
     if(user !== null) {
         commentSection = (
            <CommentInput id={id} comments={comments}/>
         );
     }

     //let the comments section equal to blank div.
     let commentOutput = <p className="commentsViewer">Please login to view comments...</p>;
     //if there is a user logged in then we display the comments section.
     if(user !== null) {
        commentOutput = (
            comments ? comments.map((singleComment) => 
                <Comment postIdentifier={singleComment.postID} commentID={singleComment.id}  username={singleComment.username} caption={singleComment.comment} comments={comments} />) 
                : <></>
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
            
            {commentOutput}
        
        </div>
    );
};

export default Index;