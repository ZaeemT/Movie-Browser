import Hero from "./Hero";

const Home = () => {
    return (
        <>
            <Hero text="Welcome" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente exercitationem quo sequi, non quis tempore soluta ea minus unde magni inventore quae odit illum placeat dolorum, nesciunt itaque. Praesentium, sint?</p>
                    </div>
                </div>
            </div>
        </>
    )        
}

export default Home;