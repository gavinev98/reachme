import React, { Component } from 'react';
import { SignInBtn } from '../../components/index';
import "./style.css";

class index extends Component {
    //monitor state



    render() {
        return (
            <div className="navbar">
                <p className="reachme">ReachMe</p>

                <SignInBtn />
            </div>
        );
    }
}

export default index;