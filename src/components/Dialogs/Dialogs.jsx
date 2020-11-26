import React, {Component} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.state.messages.map(message => <Message message={message.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT', newTextM: text});
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
                                  ref={newMessageElement}
                                  value={props.newMessageText}/>
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