import React from 'react'

// This component is used to display the search term
// It receives the searchTerm as a prop and displays it in a div
const Search = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className='search'>
            <div>
                <img src="search.svg" alt="search" />

                <input type="text"
                    placeholder='Search for a movie, tv show, person...'
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />

            </div>
        </div>
    )
}

export default Search