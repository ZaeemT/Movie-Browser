import Hero from "./Hero";
import MovieCard from "./MovieCard";
//API key = d86b2905f1c008bfad2803abc6fbace2
// https://api.themoviedb.org/3/search/movie?api_key=d86b2905f1c008bfad2803abc6fbace2&language=en-US&query=star%20wars&page=1&include_adult=false 


const SearchView = ({ keyword, searchResults }) => {
  const title = `You searched for ${keyword}`;

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