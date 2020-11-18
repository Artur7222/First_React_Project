import React, {Component} from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.posts_block}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message='Hi, how are you' likesCount='15'/>
                <Post message="It's my first Salam" likesCount='20'/>
            </div>
        </div>
    );
};

export default MyPosts; 