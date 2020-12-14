import React, {Component} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().dialogsPage;

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                };

                let onMessageChange = (textM) => {
                    store.dispatch(updateNewMessageTextActionCreator(textM));
                };

                return (
                    <Dialogs updateNewMessage={onMessageChange} addMessage={addMessage}
                             dialogsPage={state}/>
                )
            }}

        </StoreContext.Consumer>
    );
};

export default DialogsContainer;