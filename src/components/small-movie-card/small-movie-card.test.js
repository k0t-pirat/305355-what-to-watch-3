import React from 'react';
import renderer from 'react-test-renderer';
import {films} from '../../mocks/films.js';
import SmallMovieCard from './small-movie-card.js';

it(`SmallMovieCard renders correclty`, () => {
  const tree = renderer.create(
      <SmallMovieCard
        film = {films[0]}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
