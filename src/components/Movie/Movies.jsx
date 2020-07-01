import React from 'react';
import { DisplayMovies } from './DisplayMovies';
import './style.css';

export const Movies = ({items, movieInfo}) => {
    return (
      <div className="movie-card text-center p-3">
        {items.map((item, index) => (
          <DisplayMovies key={index} movie={item} image={item.poster_path} movieInfo={movieInfo} />
        ))}
      </div>
    );
}