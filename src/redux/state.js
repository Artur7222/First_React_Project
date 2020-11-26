let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likescount: 15},
                {id: 2, message: "It's my first Salam", likescount: 25},
                {id: 3, message: "It's my second Salam", likescount: 3},
                {id: 4, message: "It's my third Salam", likescount: 14}],
            newPostText: 'New post'
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
            newMessageText: 'New message'
        }
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

    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likescount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    // addMessage() {
    //     let newMessage = {
    //         id: 5,
    //         message: this._state.dialogsPage.newMessageText,
    //     };
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newMessageText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewMessageText(newTextM) {
    //     this._state.dialogsPage.newMessageText = newTextM;
    //     this._callSubscriber(this._state);
    // },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likescount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newTextM;
            this._callSubscriber(this._state);
        }
    }
};

window.store = store;

export default store;