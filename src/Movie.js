import React from 'react';
import PropTyps from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
    return (
    <div className="movies_movie">
        <div className="movie">
            <img src={poster} alt={title} title={title} />
        </div>
        <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="genres">
            {genres.map((genre, index) => (
                <li key={index} className="genres_genre">
                    {genre}
                </li>
            ))}
        </ul>
        <p className="movie_summary">{summary}</p>
        </div>
    </div>
    );
}

Movie.PropTyps = {
    id: PropTyps.number.isRequired,
    year: PropTyps.number.isRequired,
    title: PropTyps.string.isRequired,
    summary: PropTyps.string.isRequired,
    poster: PropTyps.string.isRequired,
    genres: PropTyps.arrayOf(PropTyps.string).isRequired
};

export default Movie;