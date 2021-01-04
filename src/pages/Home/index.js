import React from 'react';
import { SignInBtn } from '../../components/index';
import { NavBar, CreatePost, Post } from '../../containers/index';

import "./style.css";

const index = () => {
    return (
        <div className="home">
            <NavBar />
           <CreatePost />
           <Post />

        </div>
    );
};

export default index;