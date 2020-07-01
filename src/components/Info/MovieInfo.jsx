import React from 'react'

export const MovieInfo = ({info, closeInfo}) => {
    return (
        <div className="container">
            <div
                className="row"
            >
                <button className="btn btn-primary m-3" onClick={closeInfo}>Go Back</button>
            </div>
            <div className="row">
                <div className="mt-5 ml-5">
                    {info.poster_path === null ? (
                        <img
                            className=""
                            src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
                            alt="problems"
                        />
                    ) : (
                            <img
                                className=""
                                src={`http://image.tmdb.org/t/p/w185${info.poster_path}`}
                                alt="problems"
                            />
                        )}
                </div>
                <div className="col-sm-8">
                    <div className="info-container p-5">
                        <p> Title : {info.title}</p>
                        <p>
                            {" "}
              Release Date :{" "}
                            {info.release_date
                                .substring(6)
                                .split("-")
                                .concat(info.release_date.substring(0, 4))
                                .join("/")}
                        </p>
                        <p>Overview : {info.overview}</p>
                        <p>Ratings : {info.vote_average}</p>
                    </div>
                </div>
            </div>
        </div>    
    )
}
