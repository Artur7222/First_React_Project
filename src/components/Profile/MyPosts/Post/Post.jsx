import React, { Component } from 'react'; 
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/TH/en/19/HP0700-CUSA08526_00-PREMIUMAVATAR004/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000" alt="post avatar"/>
            {props.message}; 
            <div>
                <span>like</span>
            </div>
        </div>
    );
};

export default Post; 