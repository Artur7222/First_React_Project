import React, {Component} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messages.map(message => <Message message={message.message}/>);
    let newMessageText = state.newMessageText;


    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = (e) => {
        let textM = e.target.value;
        props.updateNewMessage(textM)
    };


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea onChange={onMessageChange}
                                  value={newMessageText}
                                  placeholder='New message'/>
                    </div>
                    <div>
                        <button onClick={addMessage}>Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;