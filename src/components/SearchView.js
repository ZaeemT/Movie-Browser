import { Link } from "react-router-dom";
import Hero from "./Hero";

//API key = d86b2905f1c008bfad2803abc6fbace2
// https://api.themoviedb.org/3/search/movie?api_key=d86b2905f1c008bfad2803abc6fbace2&language=en-US&query=star%20wars&page=1&include_adult=false 
const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`;
  const altImgUrl = "https://images.unsplash.com/photo-1563459094091-026377f7148b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";

  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">   
      <div className="card">
        <img 
          src={posterUrl} 
          onError = {({currentTarget}) => {
            currentTarget.onerror = null;
            currentTarget.src = altImgUrl;
          }}
          className="card-img-top" 
          alt={movie.original_title} 
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">Show details</Link>
        </div>
      </div>
    </div>
  )
}

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;

  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />
  });

  const renderResults = () => {
    return (
      <>
        {resultsHtml &&
          <div className="container">
            <div className="row">
              {resultsHtml};
            </div>
          </div>
        } 
      </>
    )
  }

  const renderNoResults = () => {
    return (
      <div className="p-5 hero-container">
        <h2 className="hero-text">Sorry, this movie does not exist in our database. </h2>
      </div>
    )
  }

  return (
    <>
      <Hero text={title} />
      {Array.isArray(resultsHtml) && resultsHtml.length ? renderResults() : renderNoResults()}
    </>
  )
}

export default SearchView; 