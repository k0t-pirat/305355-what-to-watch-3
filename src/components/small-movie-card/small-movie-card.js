import React from 'react';
import PropTypes from 'prop-types';

const SmallMovieCard = (props) => {
  const {film} = props;
  const {onMovieCardTitleClick} = props;
  const {onMovieCardHover} = props;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={onMovieCardHover}>
      <div className="small-movie-card__image">
        <img src={`img/${film.image}`} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html" onClick = {onMovieCardTitleClick}>{film.title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  onMovieCardTitleClick: PropTypes.func.isRequired,
  onMovieCardHover: PropTypes.func.isRequired
};

export default SmallMovieCard;
