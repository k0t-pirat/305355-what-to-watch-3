import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card.js';
import {films} from '../../mocks/films.js';

Enzyme.configure({
  adapter: new Adapter()
});

it(`shhould small movie card title be pressed`, () => {
  const onMovieCardHover = jest.fn();
  const film = films[0];

  const smallMovieCard = shallow(
      <SmallMovieCard
        film = {film}
        onMovieCardHover = {onMovieCardHover}
      />
  );

  const movieCard = smallMovieCard.find(`.small-movie-card`);
  movieCard.first().props().onMouseOver();

  expect(onMovieCardHover.mock.calls.length).toBe(1);
});

it(`should film title be clicked`, () => {
  const onMovieCardTitleClick = jest.fn();
  const film = films[0];

  const main = shallow(
      <SmallMovieCard
        film = {film}
        onMovieCardTitleClick = {onMovieCardTitleClick}
      />
  );

  const movieCardTitle = main.find(`.small-movie-card__link`);
  movieCardTitle.first().props().onClick();

  expect(onMovieCardTitleClick.mock.calls.length).toBe(1);
});
