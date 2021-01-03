import React, { useState, useContext } from 'react';
import { SignInBtn } from '../../components/index';
import "./style.css";
import { UserContext } from '../../contexts/user';

const Index = () => {

    //using react hooks to access the users data.
    const [user, setUser] = useContext(UserContext).user;

    //react hook to store the users caption of post.
    const [caption, setCaption] = useState("");

    //react hook to store the users uploaded image.



    return (
        <div className="createpost">
        {user ? 
        <div class="createPostContainer">
         <p className="createPostCaption">Create a Post</p>
         <div className="loggedIn" >
         <textarea className="createPostContent" placeholder="Whats on your mind" value={caption} onChange={(e) => setCaption(e.target.value)}></textarea>

        </div>
        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        :   <SignInBtn />}
        </div>
    );
};


export default Index;