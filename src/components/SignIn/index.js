import React, { useState } from 'react';
import "./style.css";
import { signInWithGoogle } from '../../services/auth';


const Index  = () => {
    //using react hooks
    const [user, setUser] = useState();

    //sign in user via the auth file.
    const signInClick = async () => {
        let user = await signInWithGoogle();
        //if user is not null.
        if(user) {
            //setting the user via hook method.
            setUser(user);
        }
    }



    return (
        <div className="overview">
            <p className="signInBtn">Sign in with google</p>
        </div>
    );
};

export default Index;