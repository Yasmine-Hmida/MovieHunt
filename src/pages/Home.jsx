import MovieCard from "../components/MovieCard";
import {useState} from "react";
import '../css/Home.css'

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id:1 , title:"John Wick", release_date: "2020"},
        {id:2 , title:"Back to the Future", release_date: "1980"},
        {id:3 , title:"Titanic", release_date: "1995"}
    ];

    const handleSearch = () => {

    }
     
    return (
        <div className="home">
            <form className="search-form" onSubmit={handleSearch}>
                <input type="text" 
                       placeholder="Search for movies..." 
                       className="search-input" 
                       value={searchQuery}
                       onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) => {
                    return <MovieCard movie={movie} key={movie.id} />
                })}
            </div>
        </div>
    )
}

export default Home
