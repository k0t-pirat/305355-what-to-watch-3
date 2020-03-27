import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.js';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, onMovieCardTitleClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, key) =>
          <SmallMovieCard
            key = {key}
            film = {film}
            onMovieCardTitleClick = {onMovieCardTitleClick}
            onMovieCardHover = {(evt) => {
              const hoveredMovieCard = evt.currentTarget;
              this.setState(() => (hoveredMovieCard));
            }}
          />
        )}

      </div>
    );
  }
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })),
  onMovieCardTitleClick: PropTypes.func.isRequired
};

export default MoviesList;
