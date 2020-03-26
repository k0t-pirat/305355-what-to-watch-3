import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.js';
import {films, featuredFilm} from '../../mocks/films.js';

it(`App renders correctly`, () => {
  const tree = renderer.create(
      <Main
        films = {films}
        featuredFilm = {featuredFilm}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
