import React, {Component} from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    );
};

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <DialogItem name="Artur" id="1"/>
                <DialogItem name="Elvira" id="2"/>
                <DialogItem name="Ruslan" id="3"/>
                <DialogItem name="Lokki" id="4"/>
            </div>
            <div className={classes.messages}>
                <Message message="Надо закатать"/>
                <Message message="Плов хочу"/>
                <Message message="Хорошее имя у меня"/>
                <Message message="Шнуры хочу"/>
            </div>
        </div>
    );
};

export default Dialogs; 