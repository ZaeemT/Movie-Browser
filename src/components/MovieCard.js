import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const detailUrl = `/movies/${movie.id}`;
    const altImgUrl = "https://images.unsplash.com/photo-1563459094091-026377f7148b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
  
    return (
      <div className="col-xl-3 col-lg-3 col-md-6 my-4">   
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

export default MovieCard;