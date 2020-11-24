let  rerenderEntireTree = () => {
   console.log('State was changed')
};

let state = {
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
};

window.state = state;

export const addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likescount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const addMessage = (messageText) => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
};

export const updateNewMessageText = (newTextM) => {
    state.dialogsPage.newMessageText= newTextM;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;