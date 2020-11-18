import React, {Component} from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you', likescount: 15},
        {id: 2, message: "It's my first Salam", likescount: 25},
        {id: 3, message: "It's my second Salam", likescount: 3},
        {id: 4, message: "It's my third Salam", likescount: 14}];

    let postsElements = posts.map(post => <Post message={post.message} likesCount={post.likescount}/>);

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
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts; 