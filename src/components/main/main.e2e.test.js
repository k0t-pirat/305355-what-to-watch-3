import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.js';
import {films, featuredFilm} from '../../mocks/films.js';

Enzyme.configure({
  adapter: new Adapter()
});

it(`should film title be clicked`, () => {
  const onMovieCardTitleClick = jest.fn();

  const main = shallow(
      <Main
        films = {films}
        featuredFilm = {featuredFilm}
        onMovieCardTitleClick = {onMovieCardTitleClick}
      />
  );

  const movieCardTitle = main.find(`.small-movie-card__link`);
  movieCardTitle.first().props().onClick();

  expect(onMovieCardTitleClick.mock.calls.length).toBe(1);
});
