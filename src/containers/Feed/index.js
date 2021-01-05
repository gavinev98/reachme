import React, { useState, useEffect } from 'react';
import { Post } from '../../containers/index';
import "./style.css";

const Feed = () => {

    //fething all posts to be displayed on the feed.
    const [posts, setPosts] = useState([]);


    //useEffect is similar to that of componentDidMount() etc will run when DOM is loaded.
    useEffect(() => {
       

      });


    return (
        <div className="FeedContainer">

               <Post id={} profileURL={} username={}  photoURL={} caption={} comments={}/>
        </div>
    );
};

export default Feed;