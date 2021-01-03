import React, { useState, useContext } from 'react';
import { SignInBtn } from '../../components/index';
import "./style.css";
import { UserContext } from '../../contexts/user';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

const Index = () => {

    //using react hooks to access the users data.
    const [user, setUser] = useContext(UserContext).user;

    //react hook to store the users caption of post.
    const [caption, setCaption] = useState("");

    //react hook to store the users uploaded image.
    const [image, setImage] = useState("");


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
        {caption ?  <button className="createPostUpload" onClick={handleUpload} style={{backgroundColor: caption ? "" : "lightgrey"}}>Upload</button> : <button className="createPostUpload" disabled onClick={handleUpload} style={{backgroundColor: caption ? "" : "lightgrey"}}>Upload</button>}

        </div>
        </div>
            
          )  :   <SignInBtn />}
        </div>
    );
};


export default Index;