const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState =  {
    posts: [
        {id: 1, message: 'Hi, how are you', likescount: 15},
        {id: 2, message: "It's my first Salam", likescount: 25},
        {id: 3, message: "It's my second Salam", likescount: 3},
        {id: 4, message: "It's my third Salam", likescount: 14}],
    newPostText: ''
};

 const profileReducer = (state = initialState, action) => {
     debugger;
     switch (action.type) {
         case ADD_POST:
             let newPost = {
                 id: 5,
                 message: state.newPostText,
                 likescount: 0
             };
             state.posts.push(newPost);
             state.newPostText = '';
             return state;
         case UPDATE_NEW_POST_TEXT:
             state.newPostText = action.newText;
             return state;
         default: return state;
     }
 };

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

 export default profileReducer;