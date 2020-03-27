import React from 'react';
import Main from '../main/main.js';
import PropTypes from 'prop-types';

const App = (props) => {
  const onMovieCardTitleClick = function () {};

  return <Main featuredFilm = {props.featuredFilm} films = {props.films} onMovieCardTitleClick = {onMovieCardTitleClick}/>;
};

App.propTypes = {
  featuredFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    realeaseDate: PropTypes.number.isRequired
  }),
  films: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })),
};

export default App;
