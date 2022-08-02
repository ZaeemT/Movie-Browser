import Hero from "./Hero";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieView = () => {

    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d86b2905f1c008bfad2803abc6fbace2&language=en-US`)
            .then(response => response.json())
            .then(data => {
                // Faking delay incase a network is slow api request might take few seconds
                // setTimeout(() => {
                //     setMovieDetails(data);
                //     setIsLoading(false);
                // }, 1000)

                setMovieDetails(data);
                setIsLoading(false);
            })
    }, [id])

    // function getCountries() {
    //     return (
    //         <>
    //             for(let x=0; x < movieDetails.length(); x++) {
    //                 <p className="lead">{movieDetails.production_countries[x].name}, </p>
    //             }
    //         </>
    //     )
    // }

    function renderMovieDetail() {
        if(isLoading) {
            return <Hero text="Loading..." />
        }
        if(movieDetails) {
            const posterPath = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;
            const backdropUrl = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`;
            const altImageUrl = "https://images.unsplash.com/photo-1563459094091-026377f7148b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";

            return (
                <>
                    <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3">
                                <img 
                                    src={posterPath} 
                                    onError = {({currentTarget}) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src = altImageUrl;
                                    }}
                                    alt="..." 
                                    className="img-fluid shadow rounded" 
                                />                                
                            </div>
                            <div className="col-md-8 ps-5">
                                <h2>{movieDetails.original_title}</h2>
                                <p className="lead"><strong>Overview: </strong>{movieDetails.overview}</p>
                                <p className="lead"><strong>Status: </strong>{movieDetails.status}</p>
                                <p className="lead"><strong>Released date: </strong>{movieDetails.release_date}</p>
                                <p className="lead"><strong>Country: </strong>
                                    {/* {{for(let x=0; x < {movieDetails.production_countries}.length; x++){
                                        <p>{movieDetails.production_countries[x].name}, </p>
                                    }}} */}
                                </p>

                                
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }

    return renderMovieDetail();
}

export default MovieView; 