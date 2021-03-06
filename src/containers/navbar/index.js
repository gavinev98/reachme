import React, { Component, useState, useContext } from 'react';
import { SignInBtn } from '../../components/index';
import "./style.css";
import { UserContext } from '../../contexts/user';


const Index = () => {

    const [user, setUser] = useContext(UserContext).user;

    
    return (
        <div className="navbar">
        <p className="reachme">ReachMe</p>
        {user ?  <img className="imageround" src={user.photoURL}></img> : <SignInBtn /> }
        </div>
    );
};

export default Index;