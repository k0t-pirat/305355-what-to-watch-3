import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.js';

const film = {
  title: `My Film`,
  genre: `comedy`,
  realeaseDate: 1988
};

ReactDOM.render(
    <App film = {film} />,
    document.getElementById(`root`)
);
