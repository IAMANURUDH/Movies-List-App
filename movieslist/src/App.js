import React, { useState } from 'react';
import MovieForm from './MovieForm';
import MovieList from './MovieList';

function App() {
  const [movies, setMovies] = useState([]);
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };
  return (
    <div style={{ 'margin': '0 auto' }}>
      <br/>
      <h1 style={{ 'text-align': 'center' }}>Add a Movie</h1>
      <MovieForm addMovie={addMovie} />
      <br>
      </br>
      <h2 style={{ 'color': 'red', 'text-align': 'center' }}>Movie List</h2>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;