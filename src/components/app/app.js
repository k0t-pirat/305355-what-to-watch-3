import React from 'react';
import Main from '../main/main.js';

const App = (props) => {
  const {film} = props;

  return <Main film = {film}/>;
};

export default App;
