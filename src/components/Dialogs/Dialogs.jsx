import React, {Component} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.state.messages.map(message => <Message message={message.message}/>);

    let newMessageElement = React.createRef();

    let addPost = () => {
        let text = newMessageElement.current.value;
        alert(text);
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
                        <textarea ref={newMessageElement}> </textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;