import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './AlbumListings/store/store';
import './index.scss';
import App from './App';

const store = createStore();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

