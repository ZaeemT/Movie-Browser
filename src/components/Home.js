import Hero from "./Hero";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";

// Generating random movie id
const RandomMovieCard = () => {
    var randomId = Math.ceil(Math.random() * 20); 
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
            <MovieCard movie={movieDetails} key={randomId}  />
        </>
    )

}

const Home = () => {

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
                    <div className="row">
                    
                        <RandomMovieCard />
                        <RandomMovieCard />
                        <RandomMovieCard />
                        <RandomMovieCard />
                        
                    </div>
                    
                </div>
            </div>
        </>
    )        
}

export default Home;