const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Artur'},
        {id: 2, name: 'Elvira'},
        {id: 3, name: 'Ruslan'},
        {id: 4, name: 'Lokki'}],
    messages: [
        {id: 1, message: 'Надо закатать'},
        {id: 2, message: 'Плов хочу'},
        {id: 3, message: 'Хорошее имя у меня'},
        {id: 4, message: 'Шнуры хочу'}],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newTextM;
            return state;
        default: return state;
    }
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (textM) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newTextM: textM});

export default dialogsReducer;