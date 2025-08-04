import {createContext , useContext , useState , useEffect} from "react"

const MovieContext = createContext() // Create a box (called context) that can store shared data.

// eslint-disable-next-line react-refresh/only-export-components
export const useMovieContext = () => useContext(MovieContext) // Shortcut so other components can use the context

// Our MovieProvider will allow our app access to certain states across pages 
export const MovieProvider = ({children}) => {
    const [favorites , setFavorites] = useState([]); // List of fav movies
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");
        if(storedFavs){
            setFavorites(JSON.parse(storedFavs));
        }
        setHasLoaded(true);
    }, [])

    // Updating the localStorage
    useEffect(() => {
        if (hasLoaded) {
            localStorage.setItem("favorites", JSON.stringify(favorites));
        }
    }, [favorites, hasLoaded]);

    const addToFavorites = (movie) => {
        setFavorites(prevFavs => [...prevFavs , movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prevFavs => prevFavs.filter((movie) => movieId !== movie.id))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    // List of states and functions that we will provide to the children to use
    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }
    
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}