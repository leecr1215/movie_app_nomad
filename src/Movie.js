import React from 'react';
import PropTyps from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster}) {
    return (
    <div class="movies_movie">
        <div class="movie">
            <img src={poster} alt={title} title={title} />
        </div>
        <div class="movie_data">
        <h3 class="movie_title">{title}</h3>
        <h5 class="movie_year">{year}</h5>
        <p class="movie_summary">{summary}</p>
        </div>
    </div>
    );
}

Movie.PropTyps = {
    id: PropTyps.number.isRequired,
    year: PropTyps.number.isRequired,
    title: PropTyps.string.isRequired,
    summary: PropTyps.string.isRequired,
    poster: PropTyps.string.isRequired
};

export default Movie;