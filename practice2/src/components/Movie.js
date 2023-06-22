import PropTypes from "prop-types";

function Movie({title, summary, genres}){
    return (
        <div>
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g,index) =>
                    <li key={index}>{g}</li>
                )}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;