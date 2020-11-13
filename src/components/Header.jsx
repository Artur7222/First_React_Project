import React, { Component } from 'react'; 
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://habrastorage.org/webt/z1/bu/fm/z1bufmx1tce1wxwjm92w7wz_7lq.png" alt="site logo"/>
        </header>
    );
};

export default Header; 