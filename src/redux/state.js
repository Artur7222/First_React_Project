import {rerenderEntireTree} from "../render"

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likescount: 15},
            {id: 2, message: "It's my first Salam", likescount: 25},
            {id: 3, message: "It's my second Salam", likescount: 3},
            {id: 4, message: "It's my third Salam", likescount: 14}]
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
            {id: 4, message: 'Шнуры хочу'}]
    }
};
export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likescount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export default state;