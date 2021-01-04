import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/user';


const Index = () => {

    //using react hooks to access the users data.
    const [user, setUser] = useContext(UserContext).user;
    

    return (
        <div className="postContainer">
            <div >
                <img src={user.photoURL} />
            </div>
        </div>
    );
};

export default Index;