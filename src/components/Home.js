import Hero from "./Hero";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";


const Home = () => {

    // Generating random movie id
    const randomId = Math.ceil(Math.random() * 20); 
    const [movieDetails, setMovieDetails] = useState({});
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${randomId}?api_key=d86b2905f1c008bfad2803abc6fbace2&language=en-US`)
                .then(response => response.json())
                .then(data => {
                    setMovieDetails(data);
                })
    }, [randomId])

    return (
        <>
            <Hero text="Welcome" />

            {/* Strip below hero */}
            <div className="bg-white py-4 shadow p-3 mb-5 bg-body rounded">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h3><strong>Movie Browser</strong></h3>
                            <p className="lead">Here you can search for any movie you want to know about.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Body Content */}
            <div className="pt-lg-5 pb-lg-3 pt-3 pb-3">
                <div className="container">

                    <div className="row mb-4">
                        <div className="col">
                        <div className="h2">Recommended to you</div>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="row g-0">
                    
                        {/* 1st card */}
                        <MovieCard movie={movieDetails} key={randomId} />
                        {/* <div className="col-lg-3 col-md-3 col-2 my-4">   
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
                        </div> */}
                    </div>
                    
                </div>
            </div>
        </>
    )        
}

export default Home;