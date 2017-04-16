import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Details from './Details';
import Comment from './props_components';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author} />,
  document.getElementById('root')
);


//ReactDOM.render(
  // <App message={true} />,
 // document.getElementById('root')
//);
