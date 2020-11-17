import React, {Component} from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to='/dialogs/1'>Artur</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2'>Elvira</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>Ruslan</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/4'>Lokki</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Надо закатать чуть чуть</div>
                <div className={classes.message}>Плов сделайте пожалуйста</div>
                <div className={classes.message}>Салам всем</div>
                <div className={classes.message}>Шнуры есть?</div>
            </div>
        </div>
    );
};

export default Dialogs; 