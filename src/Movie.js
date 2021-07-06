import React from 'react';
import PropTyps from "prop-types";

function Movie({id, year, title, summary, poster}) {
    return <h2>{title}</h2>
}

Movie.PropTyps = {
    id: PropTyps.number.isRequired,
    year: PropTyps.number.isRequired,
    title: PropTyps.string.isRequired,
    summary: PropTyps.string.isRequired,
    poster: PropTyps.string.isRequired
};

export default Movie;