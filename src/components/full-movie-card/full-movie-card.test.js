import React from 'react';
import renderer from 'react-test-renderer';
import {featuredFilm} from '../../mocks/films';
import FullMovieCard from './full-movie-card';

it(`FullMovieCard renders`, () => {
  const tree = renderer.create(
      <FullMovieCard featuredFilm = {featuredFilm}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
