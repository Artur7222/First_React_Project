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

    let dialogs = [
        {id: 1, name: 'Artur'},
        {id: 2, name: 'Elvira'},
        {id: 3, name: 'Ruslan'},
        {id: 4, name: 'Lokki'}];

    let messages = [
        {id: 1, message: 'Надо закатать'},
        {id: 2, message: 'Плов хочу'},
        {id: 3, message: 'Хорошее имя у меня'},
        {id: 4, message: 'Шнуры хочу'}];

    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = messages.map(message => <Message message={message.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;