import React, { useState, useContext } from 'react';
import { SignInBtn } from '../../components/index';
import "./style.css";
import { UserContext } from '../../contexts/user';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { storage, db } from '../../firebase';
import makeid from '../../shared/function';

import firebase from 'firebase';


const Index = () => {

    //using react hooks to access the users data.
    const [user, setUser] = useContext(UserContext).user;

    //react hook to store the users caption of post.
    const [caption, setCaption] = useState("");

    //react hook to store the users uploaded image.
    const [image, setImage] = useState("");

    //react hook to take care of progress
    const [progress, setProgress] = useState(0);


    //creating change funtion for uploading an image
    const handleChange = (event) => {

        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
                //set image state using react hook.
              setImage(URL.createObjectURL(img));

              var selectedImage = URL.createObjectURL(img);

              var imagePreview = document.getElementById('image-preview');
              imagePreview.src = selectedImage;
              imagePreview.style.display = "block";
           
          }
    }
    //handle upload of post to network.
    const handleUpload = () => {
        //handling the image upload
        if(image) {
            //generating random number identifier for image.
            var imageIdentifier = makeid(10);
            const uploadTask = storage.ref(`images/${imageIdentifier}.jpg`)
            .put(image);

            uploadTask.on("state_changed", (snapshot) => {
                //progress function to see how far uploaded
                const progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
           
                setProgress(progress);
           
            }, (error) => {
                console.log(error);
            }, () => {
                //get download url and upload the post info.
                storage.ref("images").child(`${imageIdentifier}.jpg`).getDownloadURL()
                .then((imageUrl) => {

                    db.collection("posts").add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        caption: caption,
                        photoUrl: imageUrl,
                        username: user.displayName,
                        profilePhoto: user.photoURL
                    })

                });
            });
            
     
        }
            //reseting after posting.
             setCaption("");
            setProgress(0);
            setImage(null);


    }


    return (
        <div className="createpost">
        {user ? (
        <div class="createPostContainer">
         <p className="createPostCaption">Create a Post</p>
         <div className="loggedIn" >
         <textarea className="createPostContent" placeholder="Whats on your mind" value={caption} onChange={(e) => setCaption(e.target.value)}></textarea>
        </div>
        <div className="imageDisplay">
        <img  id="image-preview" alt="" />
        </div>
        <div className="justifyUpload">
        <div className="createPostUploadImage">
            <label htmlFor="fileInput">
            <AddAPhotoIcon color="secondary" fontSize="large" style={{cursor:"pointer", fontSize: "20px"}} />
            </label>
            <input id="fileInput" type="file" accept="image/*" onChange={handleChange} />
        </div>
        {caption ?  <button className="createPostUpload" onClick={handleUpload} style={{backgroundColor: caption ? "" : "lightgrey"}}>{`Upload ${progress != 0 ? progress : ""}`}</button> : <button className="createPostUpload" disabled onClick={handleUpload} style={{backgroundColor: caption ? "" : "lightgrey"}}>Upload</button>}

        </div>
        </div>
            
          )  :   <SignInBtn />}
        </div>
    );
};


export default Index;