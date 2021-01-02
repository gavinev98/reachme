import React, { Component } from 'react';
import { SignInBtn } from '../../components/index';
import "./style.css";

class index extends Component {




    
    render() {
        return (
            <div className="createpost">
            <SignInBtn />
            <p className="alignNotice">To post and comment!</p>
            </div>
        );
    }
}

export default index;