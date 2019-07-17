import React from 'react';
import './App.scss';
import AlbumListing from './AlbumListings/AlbumListing';

const App = () => (
    <div className="app">
      <header>
        <div className="graphic">
          <div className="record-outer">
            <div className="record-inner" />
          </div>
          <div className="logo-text">
            /recordz/
          </div>
          <div className="app-description">
            david roberts's pirium systems react test
          </div>
        </div>
      </header>
      <div className="albums-container">
        <AlbumListing />
      </div>
    </div>
);

export default App;
