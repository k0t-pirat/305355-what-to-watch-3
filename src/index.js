import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.js';
import {films, featuredFilm} from './mocks/films.js';

ReactDOM.render(
    <App featuredFilm = {featuredFilm} films = {films} />,
    document.getElementById(`root`)
);
