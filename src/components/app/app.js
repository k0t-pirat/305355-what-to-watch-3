import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main.js';
import FullMovieCard from '../full-movie-card/full-movie-card';

class App extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      activeMovieId: null
    };

    this._handleMovieCardClick = this._handleMovieCardClick.bind(this);
  }

  _handleMovieCardClick(id) {
    console.log(id);
    this.setState({
      activeMovieId: id
    });
  }

  _renderApp() {
    const {featuredFilm, films} = this.props;
    const {activeMovieId} = this.state;

    if (activeMovieId) {
      return <FullMovieCard featuredFilm = {films.find((film) => film.id === activeMovieId)}/>;
    }
    return <Main featuredFilm = {featuredFilm} films = {films} onMovieCardTitleClick = {this._handleMovieCardClick}/>;
  }

  _renderFullMovieCard() {
    const {featuredFilm} = this.props;

    return <FullMovieCard featuredFilm = {featuredFilm}/>;
  }

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-movie-card">
            {this._renderFullMovieCard()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  featuredFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    realeaseDate: PropTypes.number.isRequired
  }),
  films: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })),
};

export default App;
