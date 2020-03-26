import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.js';
import {films, featuredFilm} from '../../mocks/films.js';

it(`App renders correctly`, () => {
  const tree = renderer.create(
      <App
        films = {films}
        featuredFilm = {featuredFilm}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
