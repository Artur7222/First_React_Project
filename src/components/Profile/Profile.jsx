import React, { Component } from 'react'; 
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={`${classes.content} ${classes.wallpapper}`}>
                <img src="https://itproger.com/img/news/1540394188.jpg" alt="profile wallpapper"></img>
            </div>
            <div className={`${classes.content} ${classes.avatar}`}>
                <img src="https://figuya.com/uploads/product/profile_picture/9784/profile_bloodborne-figma-actionfigur-hunter-15-cm20170920-11887-1jhj0q8" alt="profile avatar"></img>
                +Description
            </div>
           <MyPosts />
      </div>
    );
};

export default Profile; 