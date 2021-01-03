import React, { useState, useContext } from 'react';
import { SignInBtn } from '../../components/index';
import "./style.css";
import { UserContext } from '../../contexts/user';

const Index = () => {

    //using react hooks to access the users data.
    const [user, setUser] = useContext(UserContext).user;


    return (
        <div className="createpost">
        {user ? <p>Create Post</p> :   <SignInBtn />}
        </div>
    );
};


export default Index;