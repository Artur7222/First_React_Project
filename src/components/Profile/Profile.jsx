import React, {Component} from 'react'
import classes from './Profile.module.css';
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    debugger;
    return (
        <div>
            <Profileinfo/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile; 