import Hero from "./Hero";

const SearchingView = ({ keyword }) => {
    const title = `You are searching for ${keyword}`;
    return (
        <>
            <Hero text={title} />
        </>
    )
}

export default SearchingView;