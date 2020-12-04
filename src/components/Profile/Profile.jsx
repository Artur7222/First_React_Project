import React, {Component} from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {
    return (
        <div>
            <Profileinfo/>
            <MyPosts posts={props.state.posts}
                     dispatch={props.dispatch}
                     newPostText={props.state.newPostText}
                     updateNewPostText={props.state.updateNewPostText}/>
        </div>
    );
};

export default Profile; 