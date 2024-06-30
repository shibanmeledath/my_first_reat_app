import Feed from './Feed';
import { useStoreState } from 'easy-peasy';

const Home = ({ isLoading, fetchError }) => {
    // Accessing searchResults from the store
    const searchResults = useStoreState((state) => state.searchResults);

    return (
        <main className="Home">
            {/* Display loading message */}
            {isLoading && <p className="statusMsg">Loading posts...</p>}

            {/* Display error message if fetchError is present */}
            {!isLoading && fetchError && <p className="statusMsg" style={{ color: "red" }}>{fetchError}</p>}

            {/* Display posts or no posts message based on searchResults */}
            {!isLoading && !fetchError && (
                searchResults.length ? (
                    <Feed posts={searchResults} />
                ) : (
                    <p className="statusMsg">No posts to display.</p>
                )
            )}
        </main>
    )
}

export default Home;
