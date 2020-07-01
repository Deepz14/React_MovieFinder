import React from 'react'

export const DisplayMovies = ({image, movie, movieInfo}) => {
    return (
      <div className="mb-3 p-3">
        <div className="card" style={{ width: "18rem" }}>
          {image === null ? (
            <img
              src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
              alt="alt"
            />
          ) : (
            <img src={`http://image.tmdb.org/t/p/w185${image}`} alt="originalImg" />
          )}
          <div className="card-body">
            <a href="!#" className="card-link" onClick={() => movieInfo(movie)}>View Details</a>
          </div>
        </div>
      </div>
    );
}
