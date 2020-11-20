import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi, how are you', likescount: 15},
    {id: 2, message: "It's my first Salam", likescount: 25},
    {id: 3, message: "It's my second Salam", likescount: 3},
    {id: 4, message: "It's my third Salam", likescount: 14}];

let dialogs = [
    {id: 1, name: 'Artur'},
    {id: 2, name: 'Elvira'},
    {id: 3, name: 'Ruslan'},
    {id: 4, name: 'Lokki'}];

let messages = [
    {id: 1, message: 'Надо закатать'},
    {id: 2, message: 'Плов хочу'},
    {id: 3, message: 'Хорошее имя у меня'},
    {id: 4, message: 'Шнуры хочу'}];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
