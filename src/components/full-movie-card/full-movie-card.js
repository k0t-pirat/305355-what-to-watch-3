import React from 'react';
import PropTypes from 'prop-types';

const getRatingScore = (rating) => {
  return (`` + rating).split(`.`).join(`,`);
};

const getRatingLevel = (rating) => {
  let ratingLevel = ``;

  switch (true) {
    case (rating >= 0) && (rating < 3):
      ratingLevel = `Bad`;
      break;
    case (rating >= 3) && (rating < 5):
      ratingLevel = `Normal`;
      break;
    case (rating >= 5) && (rating < 8):
      ratingLevel = `Good`;
      break;
    case (rating >= 8) && (rating < 10):
      ratingLevel = `Very Good`;
      break;
    case (rating === 10):
      ratingLevel = `Awesome`;
      break;
  }

  return ratingLevel;
};

const getActors = (actors) => {
  const actorsString = actors.length > 0 ? actors.join(`, `) : `В этом фильме актёров нету`;
  return `${actorsString} and other`;
};

const FullMovieCard = (props) => {
  const {featuredFilm} = props;
  const ratingScore = getRatingScore(featuredFilm.rating);
  const ratingLevel = getRatingLevel(featuredFilm.rating);
  const actors = getActors(featuredFilm.actors);

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={`img/${featuredFilm.bigImage}`} alt={`${featuredFilm.title}`} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{featuredFilm.title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{featuredFilm.genre}</span>
              <span className="movie-card__year">{featuredFilm.realeaseDate}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              <a href="add-review.html" className="btn movie-card__button">Add review</a>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={`img/${featuredFilm.posterImage}`} alt={`${featuredFilm.title} poster`} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <nav className="movie-nav movie-card__nav">
              <ul className="movie-nav__list">
                <li className="movie-nav__item movie-nav__item--active">
                  <a href="#" className="movie-nav__link">Overview</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Details</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Reviews</a>
                </li>
              </ul>
            </nav>

            <div className="movie-rating">
              <div className="movie-rating__score">{ratingScore}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">{ratingLevel}</span>
                <span className="movie-rating__count">{featuredFilm.votesNumber} ratings</span>
              </p>
            </div>

            <div className="movie-card__text">
              <p>{featuredFilm.description}</p>

              {/* <p>Gustave prides himself on providing first-className service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p> */}

              <p className="movie-card__director"><strong>Director: {featuredFilm.director}</strong></p>

              <p className="movie-card__starring">
                <strong>
                  Starring: {actors}
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FullMovieCard.propTypes = {
  featuredFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    realeaseDate: PropTypes.number.isRequired,
    bigImage: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    votesNumber: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired),
  })
};

export default FullMovieCard;
