import React from 'react';
import { SignInBtn } from '../../components/index';
import { NavBar, CreatePost, Feed} from '../../containers/index';

import "./style.css";

const index = () => {
    return (
        <div className="home">
            <NavBar />
           <CreatePost />
           <Feed />
        </div>
    );
};

export default index;