import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title , summary, poster, genres}){
    return <div className="moveis__movie">
            <img src={poster} alt={title} title={title}/>
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="genres">{genres.map((genre,index )=> <li key={index} className="genres__genre">{genre}</li>)}</ul>
            <p className="movie__summaery">{summary}</p>
        </div>
    </div>
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired //이런식으로 array인지도 확인할수있다.
};

export default Movie;