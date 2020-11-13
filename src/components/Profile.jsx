import React, { Component } from 'react'; 
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://itproger.com/img/news/1540394188.jpg" alt="profile wallpapper"></img>
            </div>
            <div>
                <img src="https://figuya.com/uploads/product/profile_picture/9784/profile_bloodborne-figma-actionfigur-hunter-15-cm20170920-11887-1jhj0q8" alt="profile avatar"></img>
                +Descroption
            </div>
            <div>
                My posts
                    <div>
                        New posts
                    </div>
                    <div className={classes.posts}>
                        <div className={classes.item}>
                            Post 1
                        </div>
                        <div className={classes.item}>
                            Post 2
                        </div>
                    </div>
            </div>
      </div>
    );
};

export default Profile; 