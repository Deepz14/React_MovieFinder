import React from 'react';
import {Nav} from './components/Navbar/Nav';
import {MovieList} from './components/Movie/MovieList';
import './App.css';

function App() {
  return (
    <div className="App">
        <Nav />
        <MovieList />
    </div>
  );
}

export default App;
