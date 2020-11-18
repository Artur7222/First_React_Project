import React, {Component} from 'react';
import classes from './Profileinfo.module.css';

const Profileinfo = () => {
    return (
        <div>
            <div className={classes.wallpapper}>
                <img src="https://itproger.com/img/news/1540394188.jpg" alt="profile wallpapper"></img>
            </div>
            <div className={classes.avatar}>
                <img
                    src="https://figuya.com/uploads/product/profile_picture/9784/profile_bloodborne-figma-actionfigur-hunter-15-cm20170920-11887-1jhj0q8"
                    alt="profile avatar">
                </img>
                <div className={classes.description_block}>
                    Description
                </div>
            </div>
        </div>
    );
};

export default Profileinfo;