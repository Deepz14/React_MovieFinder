import React, {useState} from 'react'
import {Searchbar} from '../InputField/Searchbar';
import {Movies} from '../Movie/Movies';
import {Pagination} from '../Pagination/Pagination';
import {MovieInfo} from '../Info/MovieInfo';

export const MovieList = () => {

    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);
    const [totalResults, setTotalResults] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [movieDetails, setMovieDetails] = useState('');

    const api_key = process.env.REACT_APP_API_KEY;
    
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const MovieList = async() => {
           try{
                const response = await fetch(
                  `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${value}&page=${currentPage}`
                );
                const data = await response.json();
                setItems(data.results);
                setTotalResults(data.total_results);
           }
           catch(err){
               console.log(err);
           }
        }
        MovieList();
        setValue('');
    }

    const nextPage = async(pageNumber) => {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${value}&page=${pageNumber}`
        );
        const data = await response.json();
        setItems(data.results);
        setCurrentPage(pageNumber);
    }

    const movieInfo = (movie) => {
        setMovieDetails(movie);
    }

    const closeInfo = () => {
      setMovieDetails('');
    }

    //calculate number of pages
    const totalPages = Math.floor(totalResults/20);

    return (
      <div>
        {
          movieDetails === '' ? <div>
            <Searchbar handleSubmit={handleSubmit} handleChange={handleChange} value={value} />
            <Movies items={items} movieInfo={movieInfo} /> 
            </div>
            :
            <MovieInfo info={movieDetails} closeInfo={closeInfo} />
        }
        <div className="text-center">
          {
            totalResults > 20 && movieDetails === '' ? <Pagination pages={totalPages} currentPage={currentPage} nextPage={nextPage} /> : ""
          }
        </div>
      </div>
    );
}
