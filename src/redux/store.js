import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likescount: 15},
                {id: 2, message: "It's my first Salam", likescount: 25},
                {id: 3, message: "It's my second Salam", likescount: 3},
                {id: 4, message: "It's my third Salam", likescount: 14}],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sideBar: {}
    },

    _callSubscriber() {
        console.log('State was changed')
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    }
};


window.store = store;

export default store;