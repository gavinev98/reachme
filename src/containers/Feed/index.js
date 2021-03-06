import React, { useState, useEffect } from 'react';
import { Post } from '../../containers/index';
import "./style.css";
import { db } from '../../firebase';

const Feed = () => {

    //fething all posts to be displayed on the feed.
    const [posts, setPosts] = useState([]);


    //useEffect is similar to that of componentDidMount() etc will run when DOM is loaded.
    //when posts value changes the useeffect method will run/
    useEffect(() => {
       db.collection("posts").onSnapshot((snapshot) => {
           setPosts(snapshot.docs.map((doc) => ({id: doc.id, post: doc.data()})))
       });

      }, [posts]);


    return (
        <div className="FeedContainer">

        {posts.map(( {id, post} ) => {
        return  <Post key={id} id={id} profileURL={post.profilePhoto} username={post.username}  photoURL={post.photoUrl} caption={post.caption} comments={post.comments}/>
        })}
        
        
        </div>
    );
};

export default Feed;