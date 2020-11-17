import React, { Component } from 'react'; 
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
                <div>
                    <textarea></textarea>
                    <button>Add Post</button>
                </div>
                <div>
                    <Post message = 'Hi, how are you' likesCount = '15' />
                    <Post message = "It's my first Salam" likesCount = '20'/>
                </div>
        </div>
    );
};

export default MyPosts; 