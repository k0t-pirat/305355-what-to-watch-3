import React from 'react';
import Main from '../main/main.js';
import PropTypes from 'prop-types';

const App = (props) => {
  return <Main featuredFilm = {props.featuredFilm} films = {props.films} />;
};

App.propTypes = {
  featuredFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    realeaseDate: PropTypes.number.isRequired
  }),
  films: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default App;
