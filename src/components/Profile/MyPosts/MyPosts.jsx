import React, {Component} from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hi, how are you', likescount: 15},
        {id: 2, message: "It's my first Salam", likescount: 25}];

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
                <Post message={postsData[0].message} likesCount={postsData[0].likescount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likescount}/>
            </div>
        </div>
    );
};

export default MyPosts; 