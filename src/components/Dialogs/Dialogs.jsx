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

    let dialogsData = [
        {id: 1, name: 'Artur'},
        {id: 2, name: 'Elvira'},
        {id: 3, name: 'Ruslan'},
        {id: 4, name: 'Lokki'}];

    let messagessData = [
        {id: 1, message: 'Надо закатать'},
        {id: 2, message: 'Плов хочу'},
        {id: 3, message: 'Хорошее имя у меня'},
        {id: 4, message: 'Шнуры хочу'}];

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messagessData[0].message}/>
                <Message message={messagessData[1].message}/>
                <Message message={messagessData[2].message}/>
                <Message message={messagessData[3].message}/>
            </div>
        </div>
    );
};

export default Dialogs;