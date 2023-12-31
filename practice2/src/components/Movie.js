import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, title, summary, genres}){
    return (
        <div>
            <h2><Link to={'/movie/'+id}>{title}</Link></h2>
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
    id: PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;