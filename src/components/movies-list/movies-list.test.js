import React from 'react';
import renderer from 'react-test-renderer';
import {films} from '../../mocks/films.js';
import MoviesList from './movies-list.js';

it(`MoviesList renders correctly`, () => {
  const tree = renderer.create(
      <MoviesList
        films = {films}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
