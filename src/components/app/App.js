import React from 'react';
import Header from '../header/Header';
import SearchBar from '../searchBar/SearchBar';

import('./app.scss');

const App = () => (
  <div>
    <Header />
    <div className="main-container">
      <SearchBar />
    </div>
  </div>
);

export default App;
