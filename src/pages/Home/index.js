import React from 'react';
import { SignInBtn } from '../../components/index';
import { NavBar, CreatePost } from '../../containers/index';
import "./style.css";

const index = () => {
    return (
        <div className="home">
            <NavBar />
           <CreatePost />
        </div>
    );
};

export default index;