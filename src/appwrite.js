export const updateSearchCount = async (searchTerm, movie) => {
    try {
        await fetch('http://localhost:3001/api/search', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ searchTerm, movie })
        })
    } catch (error) {
        console.error(error)
    }
}

export const getTrendingMovies = async () => {
    try {

        const results = await db.execute(
            'SELECT * FROM search_counts ORDER BY count DESC LIMIT 5',
        )

        return results[0] || []

    } catch (error) {
        console.error(error)
    }
}